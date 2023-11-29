import React from "react";
import "./App.css";
import { StudentList } from "./components/StudentList";
import { Student } from "./model/student";

const studentList: Student[] = [
  {
    id: 1,
    name: "Nguyen Van A",
    age: 18,
    address: "Ha Noi",
  },
  {
    id: 2,
    name: "Nguyen Van B",
    age: 19,
    address: "Ha Nam",
  },
  {
    id: 3,
    name: "Nguyen Van C",
    age: 20,
    address: "Ha Tay",
  },
];

function App() {
  return (
    <div className="App">
      <StudentList students={studentList} />
    </div>
  );
}

export default App;
