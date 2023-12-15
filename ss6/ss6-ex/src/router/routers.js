import AddBook from "../components/Book/AddBook";
import EditBook from "../components/Book/EditBook";
import Library from "../components/Library";
import TodoApp from "../components/TodoApp";
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
    ],
  },
];

export default routes;
