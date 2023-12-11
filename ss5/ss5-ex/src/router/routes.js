import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import LayOut from "../layout/LayOut";

const routes = [
  {
    path: "/",
    element: <LayOut />,
    errorElement: "<div>404</div>",
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
    ],
  },
];

export default routes;
