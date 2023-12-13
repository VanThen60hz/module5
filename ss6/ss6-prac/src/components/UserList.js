import { useEffect, useState } from "react";
import * as UserService from "../services/UserService";
import { NavLink, useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState();
  const nav = useNavigate();

  useEffect(() => {
    getAllUser();
  }, []);

  const getAllUser = async () => {
    try {
      let temp = await UserService.findAll();
      setUsers(temp);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="text-center">
      <h1>User List</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id} style={{ listStyle: "none" }}>
            <NavLink to={`/user/${user.id}`} state={{ user }}>
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button onClick={() => nav("/user/add")}>Create</button>
    </div>
  );
}

export default UserList;
