import React, { useState, useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import Card from "./Card";
import Alert from "./Alert";
import Spinner from './Spinner';

const CharList = ({ handleSetFavorites }) => {
  const [characters, setCharacters] = useState([]);
  const { loading, error, data } = useFetchData("/character");

  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data]);

  if (loading) {
    return (<Spinner spinnerType={`danger`}/>);
  }

  if (error) {
    return <Alert alertType={"danger"} alertText={"Opps!, something went wrong!"} />;
  }

  if (!characters) { 
    return (<Alert alertType={'danger'} alertText={'Network error! no data receved.'}/>)
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
