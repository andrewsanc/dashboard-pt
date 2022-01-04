import React from "react";

const GradeListItem = ({ name, status, score, total, comment }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{status}</td>
      <td>{score}</td>
      <td>{total}</td>
      <td>{comment}</td>
    </tr>
  );
};

export default GradeListItem;
