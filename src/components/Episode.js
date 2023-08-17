import React from 'react'

const Episode = ({title}) => { 
    return <li className="list-group-item" style={{wordWrap: 'break-word'}}>{title}</li>;
}

export default Episode;
