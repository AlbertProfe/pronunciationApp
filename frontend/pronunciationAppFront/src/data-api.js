// api.js
import axios from "axios";

const BASE_URL = "https://60f262be-ed4d-4787-96fa-f388fe44fb1b.mock.pstmn.io";
// READ: Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

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