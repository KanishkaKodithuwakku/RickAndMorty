import React from 'react'

const Button = ({ handleOnClick }) => {
  return (
    <div style={{ padding: 2 }}>
      <button
        className="btn btn-warning rounded-pill btn-sm"
        onClick={handleOnClick}
      >
        More...
      </button>
    </div>
  );
};

export default Button;
