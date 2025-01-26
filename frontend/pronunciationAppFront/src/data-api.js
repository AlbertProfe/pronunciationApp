// api.js
import axios from "axios";

const BASE_URL = "https://714730c5-ed80-4de5-9392-6abaf70cb51c.mock.pstmn.io";

export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/words`);
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};
