import axios from "axios";

export const findAll = async () => {
  try {
    let response = await axios.get("http://localhost:8080/todos");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const create = async (todo) => {
  try {
    let response = await axios.post("http://localhost:8080/todos", todo);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (todoId, todo) => {
  try {
    let response = await axios.patch(
      `http://localhost:8080/todos/${todoId}`,
      todo
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
