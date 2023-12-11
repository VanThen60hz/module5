import React from "react";
import { useLocation } from "react-router-dom";

function EmployeeDetail() {
  const { state } = useLocation();

  return (
    <>
      <h1>Employee Detail</h1>
      {state ? (
        <div>
          <p>ID: {state.id}</p>
          <p>Name: {state.name}</p>
          <p>Age: {state.age}</p>
        </div>
      ) : (
        <p>Employee not found</p>
      )}
    </>
  );
}

export default EmployeeDetail;
