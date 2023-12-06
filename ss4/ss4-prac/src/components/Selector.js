import React, { useEffect, useState } from "react";

function Selector() {
  const [selected, setSelected] = useState("");
  const [valueSelected, setValueSelected] = useState("");

  useEffect(() => {
    switch (selected) {
      case "1":
        setValueSelected("ReactJS");
        break;
      case "2":
        setValueSelected("Angular");
        break;
      case "3":
        setValueSelected("NodeJS");
        break;
      default:
        setValueSelected("");
        break;
    }
  }, [selected]);

  return (
    <>
      Khóa học:
      <select onChange={(e) => setSelected(e.target.value)}>
        <option value="1">ReactJS</option>
        <option value="2">Angular</option>
        <option value="3">NodeJS</option>
      </select>
      <h2>Khoá học của bạn: {valueSelected}</h2>
    </>
  );
}

export default Selector;
