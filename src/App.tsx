// import { useEffect, useState } from "react";
import "./styles/App.css";
import Nabvar from "./components/Navbar";
import { APIProvider } from "./context/ContextDataAPI";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CharactersList from "./components/CharactersList";

function App() {
  return (
    <Router>
      <APIProvider>
        <Nabvar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersList />} />
        </Routes>
      </APIProvider>
    </Router>
  );
}

export default App;
