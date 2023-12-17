import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as UserService from "../services/UserService";
import { toast } from "react-toastify";

function User() {
  const [users, setUsers] = useState([]);
  const [deletingUser, setDeletingUser] = useState(null);

  useEffect(() => {
    getUsers();
  }, [deletingUser]);

  const getUsers = async () => {
    try {
      const users = await UserService.findAll();
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDeleteModal = (user) => {
    setDeletingUser(user);
  };

  const deleteUser = async (id) => {
    try {
      await UserService.remove(id);
      toast.success("Delete successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const DeleteModal = () => {
    return (
      <div
        className="modal fade show"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-modal="true"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              Do you sure delete user with name: {deletingUser.name}?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setDeletingUser(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  deleteUser(deletingUser.id);
                  setDeletingUser(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {deletingUser && DeleteModal()}
      <div className="d-flex justify-content-between">
        <h1>Users</h1>
        <Link to={`add`} className="btn btn-success h-50">
          Add User
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <Link
                  to={`edit/${user.id}`}
                  state={{ user }}
                  className="btn btn-primary me-5"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleOpenDeleteModal(user)}
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default User;
