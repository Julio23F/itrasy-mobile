// import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { doc, getDoc, setDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
// import { auth, db } from "../firebaseConfig";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthentificated, setIsAuthentificated] = useState(undefined);

    // useEffect(() => {

    //     // setTimeout(() => {
    //     //     setIsAuthentificated(true);
    //     // }, 3000)
    //     // setIsAuthentificated(false);
    //     const unsub = onAuthStateChanged(auth, (user) => {
    //         if(user) {
    //             setIsAuthentificated(true);
    //             let userData;
                
    //             const fetchUserData = async () => {
    //                 const userData = await updateUserData(user.uid);
    //                 return userData; 
    //             };
    //             userData = fetchUserData();
            
    //             console.log("test", userData)
    //             setUser({
    //                 avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    //                 ...user,
    //                 ...fetchUserData()
    //             });
    //         }
    //         else{
    //             setIsAuthentificated(false);
    //             setUser(null);
    //         }
    //     });
    //     return unsub;

    // }, []);
    useEffect(() => {
        // const unsub = onAuthStateChanged(auth, (user) => {
        //   const fetchUserData = async () => {
        //     if (user) {
        //       setIsAuthentificated(true);
      
        //       const userData = await updateUserData(user.uid);
      
        //       setUser({
        //         ...user,
        //         ...userData,
        //       });
        //     } else {
        //       setIsAuthentificated(false);
        //       setUser(null);
        //     }
        //   };
      
        //   fetchUserData();
        // });
      
        // return unsub;
    }, []);
      

    const updateUserData = async (userId) => {
      // const docRef = doc(db, "users", userId);
      // const docSnap = await getDoc(docRef);
    
      // if (docSnap.exists()) {
      //   const data = docSnap.data();
      //   const user = {
      //     username: data.username,
      //     avatar: data.avatar,
      //   };
      //   return user;
      // }
    
      // return null;
    };
    

    const login = async (email, password) => {
        // try {
        //     const response = signInWithEmailAndPassword(auth, email, password);
        //     return { succes: true, data: response.user };
        // } catch (error) {
        //     let msg = error.message;
        //     console.log("error msg")
        //     if (msg.includes("(auth/invalid-email)")) msg = "Adresse e-mail invalide";
        //     return { succes: false, msg };
        // }
    }

    const register = async (username, email, password) => {
        // try {
        //   const response = await createUserWithEmailAndPassword(auth, email, password);
        //   try {
        //     await setDoc(doc(db, "users", response.user.uid), {
        //       username,
        //       userId: response.user.uid
        //     });
        //   } catch (e) {
        //     console.log("Erreur dans setDoc :", e.message);
        //     return { succes: false, msg: "Erreur lors de l'enregistrement de l'utilisateur dans la base de données" };
        //   }
      
        //   return { succes: true, data: response.user };
        // } catch (error) {
        //   let msg = error.message;
        //   if (msg.includes("(auth/invalid-email)")) msg = "Adresse e-mail invalide";
        //   if (msg.includes("(auth/email-already-in-use)")) msg = "Cette adresse e-mail est déjà utilisée";
      
        //   console.log("error.message", error.message);
        //   return { succes: false, msg };
        // }
    };
      

    const logout = async () => {
        // try {
        //     await signOut(auth);
        //     return {succes: true}
            
        // } catch (error) {
        //     return {succes: false, msg: error.message}
        // }
    }


    // return (
    //     <AuthContext.Provider value={{user, isAuthentificated, login, register, logout}}>
    //         {children}
    //     </AuthContext.Provider>
    // )
}

export const useAuth = () => {
    const value = useContext(AuthContext);


    if(!value) {
        throw new Error("useAuth must be wrapped inside AuthContextProvider");
    }

    return value;
}
