import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "./Button";
import Avatar from "./Avatar";
import { BiRadioCircleMarked } from "react-icons/bi";
import DescriptionBox from './DescriptionBox';
// AiOutlineHeart

const Card = ({ data, handleOnClick }) => {
    const { name, status, image, gender, species } = data;
    const statusIcon = (
      <BiRadioCircleMarked
        style={{
          color:
            status === "Alive"
              ? "green"
              : status === "Dead"
              ? "red"
              : "#a5a5a5",
          fontSize: 25,
        }}
      />
    );
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
                <Avatar path={image} />
              </div>
              {/* Description */}
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <h5>{name}</h5>
                  </div>
                </div>

                <DescriptionBox text={statusIcon} value={status} />
                <DescriptionBox text={`Gender`} value={gender} />
                <DescriptionBox text={`Dimention`} value={species} />
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
