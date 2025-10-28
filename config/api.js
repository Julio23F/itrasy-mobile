import axios from "axios";
import * as SecureStore from "expo-secure-store";
// import Toast from "react-native-toast-message";

import { router } from "expo-router";

// const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_URL = "https://itrasy-back-tj0b3.sevalla.app";

const api = axios.create({
  baseURL: API_URL,
});

const ERROR_MESSAGES = {
  INACTIVE_ACCOUNT: {
    title: "Compte inactif",
    message: "Veuillez contacter le support.",
  },
  SESSION_EXPIRED: {
    title: "Session expirée",
    message: "Veuillez vous reconnecter.",
  },
};

const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
};

// 🔐 Récupère la session stockée
async function getSession() {
  try {
    const value = await SecureStore.getItemAsync("session");
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 🔐 Met à jour ou supprime la session
async function updateSession(session) {
  try {
    if (session) {
      await SecureStore.setItemAsync("session", JSON.stringify(session));
    } else {
      await SecureStore.deleteItemAsync("session");
    }
  } catch (error) {
    console.error(error);
  }
}

// 🔐 Intercepteur de requêtes : ajoute le token d'auth
api.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.access) {
      config.headers.Authorization = `Bearer ${session.access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔒 Gère la déconnexion et la redirection
const handleLogout = async (errorMessage) => {
  await updateSession(null);
  router.replace("/auth/signIn");
//   Toast.show({
//     type: "error",
//     text1: errorMessage.title,
//     text2: errorMessage.message,

//     position: options.position || "top",
//     topOffset: 50,
//   });
};

// 🔄 Rafraîchit le token d'accès avec le token de rafraîchissement
const refreshToken = async (refreshToken) => {
  try {
    const response = await api.post("/auth/token/refresh/", {
      refresh: refreshToken,
    });
    const { access } = response.data;
    return { access, refresh: refreshToken };
  } catch (error) {
    console.error("Erreur lors du rafraîchissement du token:", error);
    return null;
  }
};

// 📌 Gestion de la file d’attente des requêtes pendant le rafraîchissement
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

const handleQueuedRequest = async (originalRequest) => {
  return new Promise((resolve, reject) => {
    failedQueue.push({ resolve, reject });
  }).then((token) => {
    if (token) {
      originalRequest.headers = {
        ...originalRequest.headers,
        Authorization: `Bearer ${token}`,
      };
      return api(originalRequest);
    }
    return Promise.reject(new Error("Token refresh failed"));
  });
};

const handleTokenRefresh = async (originalRequest, error) => {
  originalRequest._retry = true;
  isRefreshing = true;

  try {
    const session = await getSession();
    if (!session?.refresh) {
      await handleLogout(ERROR_MESSAGES.SESSION_EXPIRED);
      return Promise.reject(error);
    }

    const newSession = await refreshToken(session.refresh);
    if (!newSession?.access) {
      await handleLogout(ERROR_MESSAGES.INACTIVE_ACCOUNT);
      return Promise.reject(error);
    }

    await updateSession(newSession);
    api.defaults.headers.common["Authorization"] = `Bearer ${newSession.access}`;
    originalRequest.headers = {
      ...originalRequest.headers,
      Authorization: `Bearer ${newSession.access}`,
    };

    processQueue(null, newSession.access);
    return api(originalRequest);
  } catch (err) {
    processQueue(err, null);
    await handleLogout(ERROR_MESSAGES.INACTIVE_ACCOUNT);
    return Promise.reject(err);
  } finally {
    isRefreshing = false;
  }
};

// 🛑 Intercepteur de réponse : gère les erreurs 401/403 et rafraîchit le token si besoin
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest || !error.response) {
      return Promise.reject(error);
    }

    const isTokenEndpoint = originalRequest.url?.includes("/users/auth/token/");
    const isUnauthorized = error.response.status === HTTP_STATUS.UNAUTHORIZED;
    const isForbidden = error.response.status === HTTP_STATUS.FORBIDDEN;

    if (isForbidden && !isTokenEndpoint) {
      await handleLogout(ERROR_MESSAGES.INACTIVE_ACCOUNT);
      return Promise.reject(error);
    }

    if (isUnauthorized && !originalRequest._retry && !isTokenEndpoint) {
      if (isRefreshing) {
        return handleQueuedRequest(originalRequest);
      }
      return handleTokenRefresh(originalRequest, error);
    }

    return Promise.reject(error);
  }
);

export default api;
