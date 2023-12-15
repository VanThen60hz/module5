import axios from "axios";

export const findAll = async () => {
  try {
    let response = await axios.get("http://localhost:8080/books");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const create = async (book) => {
  try {
    let response = await axios.post("http://localhost:8080/books", book);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (bookId, book) => {
  try {
    let response = await axios.patch(
      `http://localhost:8080/books/${bookId}`,
      book
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = async (bookId) => {
  try {
    let response = await axios.delete(`http://localhost:8080/books/${bookId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
