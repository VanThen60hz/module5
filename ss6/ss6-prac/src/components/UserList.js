import { useEffect, useState } from "react";
import * as UserService from "../services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";

function UserList() {
  const [users, setUsers] = useState();

  useEffect(() => {
    //call api
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      let temp = await UserService.findAll();
      setUsers(temp);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1 className="text-center">User List</h1>
      <ul className="text-center">
        {users?.map((user) => (
          <li style={{ listStyle: "none" }} key={user.id}>
            {" "}
            {user.name}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserList;
