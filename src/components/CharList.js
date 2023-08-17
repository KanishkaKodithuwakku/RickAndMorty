import React, { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import Card from "./Card";

const CharList = () => {
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useFetchData("/character");

  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data]);

  return (
    <>
      {/* {JSON.stringify(characters)} */}
      <div className="row">
        {characters &&
          characters.map((character) => (
            <Card key={character.id} data={character} />
          ))}
      </div>
    </>
  );
};
export default CharList;
