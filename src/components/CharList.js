import React, { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import Card from "./Card";

const CharList = ({ handleSetFavorites }) => {
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useFetchData("/character");

  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data]);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {/* {JSON.stringify(characters)} */}
      <div className="row">
        {characters &&
          characters.map((character) => (
            <Card
              key={character.id}
              data={character}
              handleSetFavorites={handleSetFavorites}
            />
          ))}
      </div>
    </>
  );
};
export default CharList;
