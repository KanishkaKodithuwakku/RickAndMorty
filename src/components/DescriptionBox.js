import React from 'react'

const DescriptionBox = ({text,value}) => { 
    
    return (
      <div className="row">
        <div className="col-md-6">{text}</div>
        <div className="col-md-6">{value}</div>
      </div>
    );
}

export default DescriptionBox;
