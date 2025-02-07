// api.js
import axios from "axios";

const BASE_URL = "https://7e7270e1-910c-409e-a408-b5cbd7aa1da8.mock.pstmn.io"
export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/ProbaWord`);
    return response.data.words;

  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};
const BASE_URL1 ="https://6443a4d5-fd22-408a-b62e-dd3157502954.mock.pstmn.io"
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL1}/TestUser`);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching Users:", error);
    throw error;
  }
};