// api.js
import axios from "axios";

const BASE_URL = "https://c6e298f1-9bc6-4008-b85e-684c309e8250.mock.pstmn.io";

export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/words`);
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

export const fetchUser = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}