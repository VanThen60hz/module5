import Employee from "../components/Employee/Employee";
import EmployeeDetail from "../components/Employee/EmployeeDetail";
import Home from "../components/Home/Home";
import Library from "../components/Library/Library";
import LoginForm from "../components/Login/LoginForm";
import LayOut from "../layout/LayOut";

const routes = [
  {
    path: "/",
    element: <LayOut />,
    errorElement: <div className="text-center">404</div>,
    children: [
      {
        path: "/hello",
        element: "<div>Hello world!</div>",
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/employee/:id",
        element: <EmployeeDetail />,
      },
      {
        path: "/library",
        element: <Library />,
      },
    ],
  },
];

export default routes;
