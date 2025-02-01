import axios from "axios";

const BASE_URL = "https://c7a98a5b-adbe-4893-ac26-6ea827cccc21.mock.pstmn.io/";

export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/list`);
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data[0];
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};