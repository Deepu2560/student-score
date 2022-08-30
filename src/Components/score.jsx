import React from "react";

export const ScoreShow = ({ name, subject }) => {
  if (subject) {
    return (
      <>
        <h3 id="scoreShow">
          {name} Score in {subject.subject} is {subject.score}
        </h3>
      </>
    );
  } else null;
};
