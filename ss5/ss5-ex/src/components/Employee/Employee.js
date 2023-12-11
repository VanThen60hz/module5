import React from "react";
import { useNavigate } from "react-router-dom";

function Employee() {
  const navigate = useNavigate();

  const employees = [
    {
      id: 1,
      name: "Hoa",
      age: 20,
    },
    {
      id: 2,
      name: "Khánh",
      age: 25,
    },
    {
      id: 3,
      name: "Tú",
      age: 22,
    },
  ];

  const handleClickRow = (id, name, age) => () => {
    console.log(id, name, age);
    navigate(`/employee-detail/${id}`, { state: { id, name, age } });
  };

  return (
    <>
      <h1 className="text-center my-5">Employee List</h1>
      <table className="table table-hover table-bordered">
        <thead className="table-light">
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr
              key={employee.id}
              onClick={handleClickRow(employee.id, employee.name, employee.age)}
              style={{ cursor: "pointer" }}
            >
              <td>{index}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Employee;
