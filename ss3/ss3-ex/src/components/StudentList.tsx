import React from "react";
import { Student } from "../model/student";

interface StudentListProps {
  students: Student[];
}

export const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <div>
      <h1>Student List</h1>
      <table
        border={1}
        style={{ margin: "0 auto", width: "500px", height: "200px" }}
      >
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>index</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
