import React from "react";
import GradeListItem from "./GradeListItem";

const Grades = () => {
  return (
    <table className='table-auto w-full'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Score</th>
          <th>Out of</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <GradeListItem
          name={"Chapter 2 PRACTICE Quiz"}
          status={"Graded"}
          score={8}
          total={10}
          comment={false}
        />
        <GradeListItem
          name={"Chapter 2 PRACTICE Quiz"}
          status={"Graded"}
          score={8}
          total={10}
          comment={false}
        />
      </tbody>
    </table>
  );
};

export default Grades;
