// import { useEffect, useState } from "react";
import "./styles/App.css";
import Nabvar from "./components/Navbar";
import CharactersList from "./components/CharactersList";
import { APIProvider} from "./context/ContextDataAPI";

function App() {
  return (
    <>
      <APIProvider>
        <Nabvar />
        <CharactersList />
      </APIProvider>
    </>
  );
}

export default App;
