import axios from "axios";

const BASE_URL = "https://88e4a00b-25b1-441e-873c-274719894460.mock.pstmn.io";

// READ: Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// READ: Fetch a user by ID
export const fetchUserById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching the user with ID ${id}:`, error);
    throw error;
  }
};

// CREATE: Add a new user
export const createUser = async (newUser) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, { user: newUser });
    return response.data.user;
  } catch (error) {
    console.error("Error creating a new user:", error);
    throw error;
  }
};

// UPDATE: Update an existing user by ID
export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${BASE_URL}/users/${id}`, {
      user: updatedUser,
    });
    return response.data.user;
  } catch (error) {
    console.error(`Error updating the user with ID ${id}:`, error);
    throw error;
  }
};

// DELETE: Delete a user by ID
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting the user with ID ${id}:`, error);
    throw error;
  }
};
