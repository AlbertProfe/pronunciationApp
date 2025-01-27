import axios from "axios";

//export for words
export const fetchWords = async () => {
  try {
    const response = await axios.get("./src/assets/100_words.json");
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
}

//export for users
export const fetchUser = async () => {
  try {
    const response = await axios.get("./src/assets/users.json");
    return response.data[0]; // Return the first user from the array
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};