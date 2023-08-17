import React, { useEffect, useState } from "react";

const FavouriteIcon = ({ id, icon, handleIconClick }) => {
  const [favorite, setFavorite] = useState(false);
 
 const handleIconClickEvent = () => {
   const isFavorited = handleIconClick(id);
   setFavorite(isFavorited);
 };


  return (
    <>
      <button
        onClick={() => handleIconClickEvent(id)}
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
          padding: 0,
          backgroundColor: favorite ? "red" : "white",
        }}
      >
        {icon}
      </button>
    </>
  );
};

export default FavouriteIcon;
