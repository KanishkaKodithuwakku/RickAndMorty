import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import CharList from "./components/CharList";
import useFetchData from "./hooks/useFetchData";


function App() {

  return (
    <>
      <Layout>
        <h1>Rick and Morty</h1>

        <CharList />
      </Layout>
    </>
  );
}

export default App;
