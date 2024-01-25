import React from 'react';
import './Button.css';

const Button = ({ answer, onClick }) => {
  return (
    <button className="answerBtn" onClick={onClick}>
      {answer}
    </button>
  );
};

export default Button;
