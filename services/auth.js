import axios from "axios";
// import api from "../config/api";
// import Toast from "react-native-toast-message";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const signInService = async (email, password) => {
  try {
    console.log("API_URL :", API_URL);
    const response = await axios.post(`${API_URL}/api/v1/auth/login/`, {
      email,
      password,
    });
    // const response = await axios.post(`https://geographical-pictures-disorders-aspects.trycloudflare.com/api/v1/auth/login/`, {
    //     email,
    //     password,
    // });
    console.log("RESPONSE FROM SIGN IN :", response);

    const { token, refresh } = response.data;
    const session = { access: token, refresh: token };
    
    console.log("session /////////////////", session);
    
    return { session };
    
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const errorPassword = error.response.data.password;
      const errorEmail = error.response.data.email;

      if (status === 400) {
        console.log(errorEmail, errorPassword);
        if (errorEmail && errorPassword) {
            // Toast.show({
            //     type: "error",
            //     text1: "Champs vides",
            //     text2: "Les champs doivent être complétés.",

            //     position: options.position || "top",
            //     topOffset: 50,
            // });
        } else {
          if (errorEmail) {
            // Toast.show({
            //     type: "error",
            //     text1: "Email manquant",
            //     text2: "Veuillez renseigner un email.",

            //     position: options.position || "top",
            //     topOffset: 50,
            // });
          }
          if (errorPassword) {
            // Toast.show({
            //     type: "error",
            //     text1: "Mot de passe manquant",
            //     text2: "Veuillez renseigner un mot de passe.",

            //     position: options.position || "top",
            //     topOffset: 50,
            // });
          }
        }
      }

      if (status === 401) {
        // Toast.show({
        //     type: "error",
        //     text1: "Champs invalides",
        //     text2: "Identifiants invalides.",

        //     position: options.position || "top",
        //     topOffset: 50,
        // });
      }

      if (status === 403) {
        // Toast.show({
        //     type: "error",
        //     text1: "Compte inactif",
        //     text2: "Veuillez contactez le support.",

        //     position: options.position || "top",
        //     topOffset: 50,
        // });
      }

        console.log(status);
    } else {
        console.log("Une erreur inconnue s'est produite");
    }

    throw error;
  }
};
