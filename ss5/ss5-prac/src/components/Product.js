import { useLocation } from "react-router-dom";

function Product() {
  let { state } = useLocation();

  return (
    <>
      <h3>
        {state && state.categoryName
          ? `Car Selected: ${state.categoryName}`
          : "No car selected"}
      </h3>
    </>
  );
}

export default Product;
