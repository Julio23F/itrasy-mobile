import {
    createContext,
    useContext,
    PropsWithChildren,
    useEffect,
    useState,
  } from "react";
  import { useStorageState } from "./useStorage";
  import { signIn as signInService } from "../services/auth";
  import { getUserData } from "../services/fetchData";
  // import { User } from "@/types";
  
  
  // const AuthContext = createContext({
  //   signIn: async () => ({ error: "Context not initialized" }),
  //   signOut: () => {},
  //   session: null,
  //   isLoading: true,
  //   user: null,
  //   setUser: () => null,
  // });

  const AuthContext = createContext();
  
  export function useSession() {
    const value = useContext(AuthContext);
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
    return value;
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
            console.log("DONNES UTILISATEUR :", userData);
            if (isMounted) {
              setUser(userData);
            }
          } catch (error) {
            console.error(
              "Erreur lors de la récupération des données utilisateur",
              error
            );
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
  
    return (
      <AuthContext.Provider
        value={{
          signIn: async (email, password) => {
            const response = await signInService(email, password);
  
            if (response.session) {
              setSession(response.session);
              try {
                const userData = await getUserData();
                console.log(userData);
                setUser(userData);
              } catch (error) {
                console.error(
                  "Erreur lors de la récupération des données utilisateur",
                  error
                );
                setSession(null);
              }
            }
  
            return response;
          },
          signOut: () => {
            setSession(null);
            setUser(null);
          },
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