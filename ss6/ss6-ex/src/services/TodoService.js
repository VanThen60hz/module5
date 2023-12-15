import axios from "axios";

export const findAll = async () => {
  try {
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const create = async (todo) => {
  try {
    let response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todo
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (todoId, todo) => {
  try {
    let response = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`,
      todo
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
