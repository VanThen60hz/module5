import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Category from "./components/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
