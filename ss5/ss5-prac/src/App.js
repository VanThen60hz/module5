import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </BrowserRouter>
    </>
  );
}

export default App;
