import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useStorageState } from "./useStorage";
import { signInService } from "../services/auth";
import { getUserData } from "../services/fetchData";

// Contexte d'authentification
const AuthContext = createContext();

export function useSession() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useSession must be used within a <SessionProvider />");
  }
  return context;
}

export function SessionProvider({ children }) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchUserData = async () => {
      if (session) {
        try {
          const userData = await getUserData();

          console.log("userData ---------------- +++++++++++++++++++ //////////////// ", userData)

          if (isMounted) {
            setUser(userData);
          }
        } catch (error) {
          console.error("Erreur lors de la récupération des données utilisateur", error);
          setSession(null);
        }
      } else {
        setUser(null);
      }
    };

    fetchUserData();

    return () => {
      isMounted = false;
    };
  }, [session]);

  const signIn = async (email, password) => {
    const response = await signInService(email, password);

    if (response.session) {
      setSession(response.session);
      try {
        const userData = await getUserData();
        setUser(userData);
      } catch (error) {
        console.error("Erreur lors du chargement de l'utilisateur", error);
        setSession(null);
      }
    }

    return response;
  };

  const signOut = () => {
    console.log("Déconnexion...");
    setSession(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
