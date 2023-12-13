import axios from "axios";

export const findAll = async (nameSearch) => {
  try {
    let temp = await axios.get("http://localhost:8080/users");
    return temp.data;
  } catch (e) {
    console.log(e);
  }
};
