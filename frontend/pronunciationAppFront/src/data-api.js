// api.js
import axios from "axios";

const BASE_URL = "https://1f196337-d694-4b64-9b0e-ef471d8cd805.mock.pstmn.io";

export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/words`);
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const getUserImg = (name) => {
  return `https://avatar.iran.liara.run/username?username=${encodeURIComponent(name)}`
}