import React from 'react'

const Avatar = ({path,alt}) => { 

    return (
      <div>
        <img src={path} alt={alt} style={{ width: "100%" }} />
      </div>
    );
}
Avatar.defaultProps = {
  path: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  alt: "Avatar Image",
};
export default Avatar;
