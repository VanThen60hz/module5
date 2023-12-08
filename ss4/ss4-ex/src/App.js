import "./App.css";
import { useState } from "react";

function App() {
  // const carList = [
  //   { id: 1, name: "BMW" },
  //   { id: 2, name: "Mercedes" },
  //   { id: 3, name: "Audi" },
  // ];

  // const colorList = [
  //   { id: 1, name: "Red" },
  //   { id: 2, name: "Blue" },
  //   { id: 3, name: "Green" },
  // ];

  const carList = ["BMW", "Mercedes", "Audi"];
  const colorList = ["Red", "Blue", "Green"];

  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  // const handleChange = (type, value) => {
  //   setSelectedCar((prev) => {
  //     return {
  //       ...prev,
  //       [type]:
  //         type === "car"
  //           ? carList.find((car) => car.name === value)
  //           : colorList.find((color) => color.name === value),
  //     };
  //   });
  // };

  const handleChange = (type, value) => {
    console.log(type, value);
    setSelectedCar((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };

  return (
    <div className="App">
      <h1>Car name: {selectedCar.car}</h1>
      <h2>Car color: {selectedCar.color}</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <select onChange={(e) => handleChange("car", e.target.value)}>
          {carList.map((car, index) => (
            <option key={index}>{car}</option>
          ))}
        </select>
        <select onChange={(e) => handleChange("color", e.target.value)}>
          {colorList.map((color, index) => (
            <option key={index}>{color}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
