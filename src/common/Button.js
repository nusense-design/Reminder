import React from 'react'

const Button = ({ color, text, onClick }) => {
  return (
    <React.Fragment>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={onClick}>
        {text}
      </button>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: "Click",
  color: "#f5487f",
};

export default Button
