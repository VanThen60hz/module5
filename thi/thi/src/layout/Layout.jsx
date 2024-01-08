import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer/Footer";

function LayOut() {
    return (
        <>
            <Header />
            <div className="container">
                <ToastContainer />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default LayOut;
