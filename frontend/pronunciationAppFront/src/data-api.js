// api.js
import axios from "axios";

const BASE_URL = "https://1e84671c-879b-423f-b798-dfa33a0482f6.mock.pstmn.io";

// READ: Fetch all words
export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/words`);
    return response.data.words;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

// CREATE: Add a new word
export const createWord = async (newWord) => {
  try {
    const response = await axios.post(`${BASE_URL}/words`, { word: newWord });
    return response.data;
  } catch (error) {
    console.error("Error creating a new word:", error);
    throw error;
  }
};

// UPDATE: Update an existing word by ID
export const updateWord = async (id, updatedWord) => {
  try {
    const response = await axios.put(`${BASE_URL}/words/${id}`, { word: updatedWord });
    return response.data;
  } catch (error) {
    console.error(`Error updating the word with ID ${id}:`, error);
    throw error;
  }
};

// DELETE: Delete a word by ID
export const deleteWord = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/words/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting the word with ID ${id}:`, error);
    throw error;
  }
};