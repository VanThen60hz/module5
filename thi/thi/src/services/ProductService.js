import axios from "axios";

const API_URL = "http://localhost:8080";

export const findAll = async (requestUrl) => {
    try {
        let response = await axios.get(`${API_URL}/products?${requestUrl}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const findById = async (id) => {
    try {
        let response = await axios.get(`${API_URL}/products/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const findByCategory = async (categoryId) => {
    try {
        let response = await axios.get(
            `${API_URL}/products?categoryId=${categoryId}`,
        );
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const findByName = async (name) => {
    try {
        let response = await axios.get(`${API_URL}/products?name=${name}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const create = async (product) => {
    try {
        let response = await axios.post(`${API_URL}/products`, product);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const update = async (productId, product) => {
    try {
        let response = await axios.patch(
            `${API_URL}/products/${productId}`,
            product,
        );

        console.log("hello");
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const remove = async (id) => {
    try {
        let response = await axios.delete(`${API_URL}/products/${id}`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};
