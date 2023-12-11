import { useParams } from "react-router-dom";

function Product() {
  let { categoryName } = useParams();
  return (
    <>
      <h3>Car Selected {categoryName}</h3>
    </>
  );
}

export default Product;
