import React from "react";

const FavouriteIcon = ({icon}) => {
  return (
    <>
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </div>
    </>
  );
};

export default FavouriteIcon;
