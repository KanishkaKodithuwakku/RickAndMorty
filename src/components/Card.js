import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "./Button";
import Avatar from "./Avatar";

// AiOutlineHeart

const Card = ({handleOnClick}) => {
  return (
    <div className="col-md-6">
      <div
        className="row"
        style={{ border: "1px solid black", padding: 10, margin: 2 }}
      >
        <div className="col-md-12">
          <div className="row">
            {/* image area */}
            <div className="col-md-4">
              <Avatar
                path={`https://rickandmortyapi.com/api/character/avatar/2.jpeg`}
              />
            </div>
            {/* Description */}
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <h5>Name</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-md-2">*</div>
                <div className="col-md-10">Active Status</div>
              </div>

              <div className="row">
                <div className="col-md-6">Gender</div>
                <div className="col-md-6">Male</div>
              </div>

              <div className="row">
                <div className="col-md-6">Dimention</div>
                <div className="col-md-6">4555C</div>
              </div>

              <Button handleOnClick={handleOnClick} />
            </div>
            {/* Fav Icon */}
            <div className="col-md-2">
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
                <AiOutlineHeart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
