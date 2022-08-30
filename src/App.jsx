import React, { useEffect, useState } from "react";
import "./App.css";
import { StudentDropbox } from "./Components/student";

import students from "./data/studentData";

function App() {
  const [studentData, setStudentData] = useState(null);

  return (
    <div className="App">
      <h1>Student Subject Score</h1>
      <div id="show-dropbox">
        <select
          onChange={(event) =>
            event.target.value != ""
              ? setStudentData(() => students[+event.target.value])
              : setStudentData(() => event.target.value)
          }
          id="students"
        >
          <option value="" defaultValue={""}>
            Select student
          </option>
          {students.map((elem, idx) => {
            return (
              <option key={idx} value={idx}>
                {elem.name}
              </option>
            );
          })}
        </select>
        <div
          style={!studentData ? { display: "none" } : { display: "flex" }}
          id="student-score"
        >
          <StudentDropbox student={studentData} />
        </div>
      </div>
    </div>
  );
}

export default App;
