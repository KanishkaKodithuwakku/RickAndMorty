import React from 'react'

const Button = ({handleOnclick}) => { 
    return (
      <div style={{ padding: 2 }}>
        <button
          className="btn btn-primary rounded-pill btn-sm"
          onClick={handleOnclick}
        >
          More...
        </button>
      </div>
    );
}

export default Button;
