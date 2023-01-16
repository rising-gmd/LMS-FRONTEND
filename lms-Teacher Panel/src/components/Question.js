import { useState } from "react";
import "../quiz.css";

const Question = ({ index, onDelete, onChange }) => {
  return (
    <div className="question">
      <textarea lines={4} onChange={(e) => onChange(e, index)} />
      <button onClick={() => onDelete(index)}>x</button>
    </div>
  );
};

export default Question;
