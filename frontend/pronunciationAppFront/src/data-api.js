import axios from "axios";


const BASE_URL = "https://28bfb7ae-e42b-4587-978c-06e22cdd20c4.mock.pstmn.io";

export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/words`);
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};
/*export for words
export const fetchWords = async () => {
  try {
    const response = await axios.get("./src/assets/100_words.json");
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
}*/

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`);
    return response.data[0]; // Return the first user from the array
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
/*export for users
export const fetchUser = async () => {
  try {
    const response = await axios.get("./src/assets/users.json");
    return response.data[0]; // Return the first user from the array
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};*/