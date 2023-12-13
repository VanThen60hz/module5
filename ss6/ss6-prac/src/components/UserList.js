import { useEffect, useState } from "react";
import * as UserService from "../services/UserService";
import { NavLink, useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      getAllUser();
    }, 3000);
  }, []);

  const getAllUser = async () => {
    try {
      let temp = await UserService.findAll();
      setUsers(temp);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="text-center">
      <h1>User List</h1>
      {loading && <p>Loading...</p>}
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
