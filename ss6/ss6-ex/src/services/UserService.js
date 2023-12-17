import axios from "axios";

export const findAll = async () => {
  try {
    let response = await axios.get("http://localhost:8080/users");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const create = async (user) => {
  try {
    let response = await axios.post("http://localhost:8080/users", user);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (id, user) => {
  try {
    let response = await axios.patch(`http://localhost:8080/users/${id}`, user);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const remove = async (id) => {
  try {
    let response = await axios.delete(`http://localhost:8080/users/${id}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
