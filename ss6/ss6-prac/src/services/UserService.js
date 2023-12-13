import axios from "axios";

export const findAll = async () => {
  try {
    let response = await axios.get("http://localhost:8080/users");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const addUser = async (userData) => {
  try {
    let response = await axios.post("http://localhost:8080/users", userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    let response = await axios.patch(
      `http://localhost:8080/users/${userData.id}`,
      userData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
