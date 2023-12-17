import axios from "axios";

const API_URL = "http://localhost:8080";

export const findAll = async () => {
  try {
    let response = await axios.get(`${API_URL}/articles`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const create = async (article) => {
  try {
    let response = await axios.post(`${API_URL}/articles`, article);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (articleId, article) => {
  try {
    let response = await axios.patch(
      `${API_URL}/articles/${articleId}`,
      article
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const remove = async (articleId) => {
  try {
    let response = await axios.delete(`${API_URL}/articles/${articleId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const findArticleByUserId = async (userId) => {
  try {
    let response = await axios.get(`${API_URL}/articles?user_id=${userId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
