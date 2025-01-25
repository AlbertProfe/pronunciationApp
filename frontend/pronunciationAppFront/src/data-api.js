// api.js
import axios from "axios";



export const fetchWords = async () => {
  try {
    const response = await axios.get("./public/100_words.json");
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};