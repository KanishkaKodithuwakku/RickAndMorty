import { useState } from "react";
import Layout from "./components/Layout";
import CharList from "./components/CharList";

function App() {
  const [favoriteList, setFavoritesList] = useState([]);

const handleSetFavorites = (id) => {
  const updatedFavorites = favoriteList.includes(id)
    ? favoriteList.filter((favorite) => favorite !== id)
    : [...favoriteList, id];

  setFavoritesList(updatedFavorites);
  return updatedFavorites.includes(id);
};

 

  return (
    <>
      <Layout>
        <h1>Rick and Morty</h1>

        <CharList
          handleSetFavorites={handleSetFavorites}
        />
      </Layout>
    </>
  );
}

export default App;
