import axios from "axios";

export const findAll = async () => {
  try {
    let response = await axios.get("http://localhost:8080/contacts");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const create = async (contact) => {
  try {
    let response = await axios.post("http://localhost:8080/contacts", contact);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const update = async (contactId, contact) => {
  try {
    let response = await axios.patch(
      `http://localhost:8080/contacts/${contactId}`,
      contact
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteContact = async (contactId) => {
  try {
    let response = await axios.delete(
      `http://localhost:8080/contacts/${contactId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
