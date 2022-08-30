import React, { useEffect, useState } from "react";
import { ScoreShow } from "./score";

export const StudentDropbox = ({ student }) => {
  const [subjectSelected, setSubjectSelected] = useState(null);

  useEffect(() => {
    var select = document.getElementById("subjects");
    if (select) {
      select.value = "";
      setSubjectSelected(() => "");
    }
  }, [student]);

  if (student) {
    return (
      <>
        <select
          onChange={(event) =>
            event.target.value != ""
              ? setSubjectSelected(() => student.items[+event.target.value])
              : setSubjectSelected(() => event.target.value)
          }
          id="subjects"
        >
          <option value="" defaultValue={""}>
            Select Subject
          </option>
          {student.items.map((elem, idx) => {
            return (
              <option key={idx} value={idx}>
                {elem.subject}
              </option>
            );
          })}
        </select>
        <div
          style={subjectSelected ? { display: "block" } : { display: "none" }}
        >
          <ScoreShow name={student.name} subject={subjectSelected} />
        </div>
      </>
    );
  } else null;
};
