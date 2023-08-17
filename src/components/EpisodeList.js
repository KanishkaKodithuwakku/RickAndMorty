import React from "react";
import Episode from "./Episode";

const EpisodeList = ({data}) => {
    return (
      <ul className="list-group">
        {data &&
          data.map((d, index) => ( <Episode key={index} title={d} />))}
      </ul>
    );
};

export default EpisodeList;
