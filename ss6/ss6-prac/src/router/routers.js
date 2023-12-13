import UserForm from "../components/UserForm";
import LayOut from "../layout/Layout";
import UserList from "./../components/UserList";

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
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/user/add",
        element: <UserForm />,
      },
      {
        path: "/user/:id",
        element: <UserForm />,
      },
    ],
  },
];

export default routes;
