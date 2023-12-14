import { useEffect, useState } from "react";
import * as UserService from "../services/UserService";
import * as ArticleService from "../services/ArticleService";
import { NavLink, useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      getUserIdWithArticleCount();
    }, 3000);
  }, []);

  const getUserIdWithArticleCount = async () => {
    try {
      const userIdArticleCountMap =
        await ArticleService.getUserIdWithArticleCount();
      const usersWithArticleCount = users.map((user) => {
        return {
          ...user,
          articleCount: userIdArticleCountMap[user.id] || 0,
        };
      });
      setUsers(usersWithArticleCount);
    } catch (error) {
      console.error(error);
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
              {user.name} - Articles: {user.articleCount}
            </NavLink>
          </li>
        ))}
      </ul>
      <button onClick={() => nav("/user/add")}>Create</button>
    </div>
  );
}

export default UserList;
