import axios from "axios";

const API_URL = "http://localhost:8080";

export const findAll = async () => {
    try {
        let response = await axios.get(`${API_URL}/categories`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const findById = async (id) => {
    try {
        let response = await axios.get(`${API_URL}/categories/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const create = async (category) => {
    try {
        let response = await axios.post(`${API_URL}/categories`, category);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const update = async (category) => {
    try {
        let response = await axios.put(`${API_URL}/categories`, category);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const remove = async (id) => {
    try {
        let response = await axios.delete(`${API_URL}/categories/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};
