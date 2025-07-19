import axios from "axios";
import api from "../config/api";
// import Toast from "react-native-toast-message";


export const getUserAuthData = async () => {
  try {
    const response = await api.get("api/v1/member/auth/");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const openAiError = error.response?.data?.error;
      console.log("openAiError", openAiError);
      if (openAiError) {
        // Toast.show({
        //     type: "error",
        //     text1: "Erreur",
        //     text2: openAiError,

        //     position: options.position || "top",
        //     topOffset: 50,
        // });
      }
    }
    return null;
  }
};

export const getUsers = async (options = {}) => {
  try {
    const response = await api.get(
      "api/v1/member/all/",
      {
        params: options,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const openAiError = error.response?.data?.error;
      console.log("openAiError", openAiError);
      if (openAiError) {
        // Toast.show({
        //     type: "error",
        //     text1: "Erreur",
        //     text2: openAiError,

        //     position: options.position || "top",
        //     topOffset: 50,
        // });
      }
    }
    return null;
  }
};


export const getConversations = async () => {
  try {
    const response = await api.get("/chat/conversations/");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.log("Erreur lors de la récupération des conversations :", error);
    //   Toast.show({
    //         type: "error",
    //         text1: "Erreur",
    //         text2: "Impossible de charger les conversations",

    //         position: options.position || "top",
    //         topOffset: 50,
    //   });
    }
    throw error;
  }
};

export const getOrCreateConversation = async (userId) => {
  try {
    const response = await api.get(`/chat/conversations/with-user/${userId}/`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.log("Erreur lors de la récupération de la conversation :", error);
        // Toast.show({
        //         type: "error",
        //         text1: "Erreur",
        //         text2: "Impossible de charger la conversation",

        //         position: options.position || "top",
        //         topOffset: 50,
        // });
    }
    throw error;
  }
};

export const getConversationMessages = async (conversationId) => {
  try {
    const response = await api.get(`/chat/conversations/${conversationId}/messages/`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.log("Erreur lors de la récupération des messages :", error);
        // Toast.show({
        //         type: "error",
        //         text1: "Erreur",
        //         text2: "Impossible de charger les messages",

        //         position: options.position || "top",
        //         topOffset: 50,
        // });
    }
    return [];
  }
};

export const sendMessage = async (conversationId, content) => {
  try {
    const response = await api.post(`/chat/conversations/${conversationId}/messages/`, {
      content,
    });
    console.log("Message envoyé :", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        console.log("Erreur lors de l'envoi du message :", error);
        // Toast.show({
        //     type: "error",
        //     text1: "Erreur",
        //     text2: "Impossible d'envoyer le message",
        // });
    }
    return null;
  }
};
