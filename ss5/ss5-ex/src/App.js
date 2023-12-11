import "./App.css";
import HeathCareForm from "./components/HealthCare/HeathCareForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HeathCareForm />
      <ToastContainer />
    </>
  );
}

export default App;
