import React, { useState, useRef } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Button from "./Button";
import Avatar from "./Avatar";
import { BiRadioCircleMarked } from "react-icons/bi";
import DescriptionBox from "./DescriptionBox";
import FavouriteIcon from "./FavouriteIcon";
import EpisodeList from "./EpisodeList";
// AiOutlineHeart

const Card = ({ data }) => {
  const { name, status, image, gender, species, episode } = data;
  const [visible, setVisible] = useState();
  const statusIcon = (
    <BiRadioCircleMarked
      style={{
        color:
          status === "Alive" ? "green" : status === "Dead" ? "red" : "#a5a5a5",
        fontSize: 25,
      }}
    />
  );

  const showepisodes = useRef(null);

  const handleOnClick = () => {
   setVisible(!visible);
  };

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

              <Button handleOnClick={() => handleOnClick()} />
            </div>
            {/* Fav Icon */}
            <div className="col-md-2">
              <FavouriteIcon icon={<AiOutlineHeart />} />
            </div>
          </div>

          <div className="row" style={{ display: visible ?"block":'none' }} ref={showepisodes}>
            <div className="col-md-8 offset-4">
              <h6>Episodes</h6>
              <EpisodeList data={episode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
