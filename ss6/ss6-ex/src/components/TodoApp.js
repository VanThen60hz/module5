import { useEffect, useState } from "react";
import * as TodoService from "../services/TodoService";
import { toast } from "react-toastify";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState({
    userId: "",
    title: "",
    completed: false,
  });

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    try {
      const todoList = await TodoService.findAll();
      setTodoList(todoList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const todo = {
        userId: newTodo.userId,
        title: newTodo.title,
        completed: false,
      };
      const createdTodo = await TodoService.create(todo);
      setTodoList([...todoList, createdTodo]);
      setNewTodo({
        userId: "",
        title: "",
        completed: false,
      });
      toast.success("Add new to do successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompleteChange = async (todoId) => {
    try {
      const updateTodoList = todoList?.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

      setTodoList(updateTodoList);
      await TodoService.update(todoId, {
        completed: !todoList.find((todo) => todo.id === todoId).completed,
      });
      toast.success("Completed to do successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="text-center">To do List</h1>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User id:</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="user-id"
            placeholder="Enter user id"
            onChange={(e) => {
              setNewTodo({
                ...newTodo,
                userId: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">To do title:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="to-do-title"
            placeholder="Enter to do title"
            onChange={(e) => {
              setNewTodo({
                ...newTodo,
                title: e.target.value,
              });
            }}
          />
          <small id="to-do-title" className="form-text text-muted">
            You must completed your to do before ur day end.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table className="table table-bordered w-50 mx-auto">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todoList?.map((todo) => (
            <tr key={`${todo.userId}_${todo.id}`}>
              <td>{todo.userId}</td>
              <td>{todo.title}</td>
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCompleteChange(todo.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoApp;
