import { useNavigate } from "react-router-dom";

function Category() {
  let navigate = useNavigate();

  return (
    <>
      <h2>Select a Category:</h2>
      <select
        defaultValue="default"
        onChange={(e) => navigate(`/product/${e.target.value}`)}
      >
        <option value="default" disabled hidden>
          Choose your car
        </option>
        <option value="honda">Honda</option>
        <option value="suzuki">Suzuki</option>
        <option value="yamaha">Yamaha</option>
      </select>
    </>
  );
}

export default Category;
