// api.js
import axios from "axios";

const BASE_URL =
  "https://9b8ce4f3-2ac5-4f74-a62d-6e83babeff98.mock.pstmn.io";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/words`);
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};
