import React from 'react'

const Spinner = ({spinnerType}) => { 
    return (
      <div className={`spinner-border text-${spinnerType}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
}
Spinner.defaultProps = {
  spinnerType :'primary'
};
export default Spinner;
