import "./App.css";
import ContactForm from "./components/Contact/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ContactForm />
      <ToastContainer />
    </>
  );
}

export default App;
