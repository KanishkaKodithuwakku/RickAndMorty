import React from "react";

const Alert = ({ alertType, alertText }) => {
  return (
    <div className={`alert alert-${alertType}`} role="alert">
      {alertText}
    </div>
  );
};
export default Alert;
