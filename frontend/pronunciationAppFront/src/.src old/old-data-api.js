import axios from "axios";

const BASE_URL = "https://f4c63f4a-942d-42a3-9041-5d9f452303cd.mock.pstmn.io";

//export for words
export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/words`);
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
}

//export for users
export  const fetchUser = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      return response.data.user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };
