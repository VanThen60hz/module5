import AddBook from "../components/Book/AddBook";
import EditBook from "../components/Book/EditBook";
import Contact from "../pages/Contact";
import AddContact from "../components/Contact/AddContact";
import EditContact from "../components/Contact/EditContact";
import Library from "../pages/Library";
import TodoApp from "../pages/TodoApp";
import User from "../pages/User";
import UserForm from "../components/User/UserForm";
import UserUpdateWithArticle from "../components/UserUpdateWithArticle";
import LayOut from "../layout/Layout";

const routes = [
  {
    path: "/",
    element: <LayOut />,
    errorElement: <div className="text-center">404</div>,
    children: [
      {
        path: "/hello",
        element: <div>Hello world!</div>,
      },
      {
        path: "/todo-app",
        element: <TodoApp />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/library/add",
        element: <AddBook />,
      },
      {
        path: "/library/edit/:id",
        element: <EditBook />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/contact/add",
        element: <AddContact />,
      },
      {
        path: "/contact/edit/:id",
        element: <EditContact />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "user/add",
        element: <UserForm />,
      },
      {
        path: "user/edit/:id",
        element: <UserUpdateWithArticle />,
      },
    ],
  },
];

export default routes;
