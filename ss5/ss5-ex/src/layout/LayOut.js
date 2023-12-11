import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function LayOut() {
  return (
    <>
      <Header />
      <div className="container mt-4 text-center">
        <ToastContainer />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default LayOut;
