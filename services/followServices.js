import axios from "axios";
import api from "../config/api";

export const followUser = async (member_ids = []) => {
    try {
      const response = await api.post(
        "api/v1/member/follow/",
        {
          member_ids: member_ids,
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
  
export const unfollowUser = async (userId) => {
  try {
    const response = await api.post(
      `api/v1/member/unfollow/${userId}/`,
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
  
export const getFollowingUsers = async () => {
  try {
    const response = await api.get("api/v1/member/following/all/");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("ERROR :", error);
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
    return [];
  }
};
  