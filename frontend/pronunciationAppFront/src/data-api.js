// api.js
import axios from "axios";

//export for words
export const fetchWords = async () => {
  try {
    const response = await axios.get("./public/100_words.json");
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
}

//export for users
export  const fetchUser = async () => {
    try {
      const response = await axios.get("./public/users.json");
      return response.data.user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };

