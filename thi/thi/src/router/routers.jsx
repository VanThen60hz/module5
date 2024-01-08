import CreateProduct from "../components/Product/CreateProduct";
import EditProduct from "../components/Product/EditProduct";
import LayOut from "../layout/Layout";
import Product from "../pages/Product";

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
                path: "/products",
                element: <Product />,
            },
            {
                path: "/products/add",
                element: <CreateProduct />,
            },
            {
                path: "/products/edit/:id",
                element: <EditProduct />,
            },
        ],
    },
];

export default routes;
