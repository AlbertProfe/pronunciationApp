// api.js
import axios from "axios";

const BASE_URL = "https://f5917ef1-d560-4294-8890-88e2075deae8.mock.pstmn.io";

// GET: Get all words
export const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/wordsPedro`);
    return response.data.wordsPedro;
  } catch (error) {
    console.error("Error fetching words:", error);
    throw error;
  }
};

// POST: Add a new word
export const createWord = async (newWord) => {
  try {
    const response = await axios.post(`${BASE_URL}/wordsPedro`, { word: newWord });
    return response.data;
  } catch (error) {
    console.error("Error creating a new word:", error);
    throw error;
  }
};

// PUT: Update an existing word by ID
export const updateWord = async (id, updatedWord) => {
  try {
    const response = await axios.put(`${BASE_URL}/wordsPedro/${id}`, { word: updatedWord });
    return response.data;
  } catch (error) {
    console.error(`Error updating the word with ID ${id}:`, error);
    throw error;
  }
};

// DELETE: Delete a word by ID
export const deleteWord = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/wordsPedro/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting the word with ID ${id}:`, error);
    throw error;
  }
};