import "./styles/App.css";
import Navbar from "./components/Navbar";
import { APIProvider } from "./context/ContextDataAPI";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CharactersList from "./components/CharactersList";
import CharacterCard from "./components/CharacterCard";
import { useState } from "react";
import Register from "./components/Register";
import LogIn from "./components/LogIn";

function App() {

const [selectedIdData, setSelectedIdData] = useState<string | null>(null);

  const handleSelectedId = (selectedId: string) => {
    setSelectedIdData(selectedId)
  }

  return (
    <Router>
      <APIProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersList selectedId={handleSelectedId} />} />
          <Route path="/characterCard" element={<CharacterCard idForCard={selectedIdData}  />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />


        </Routes>
      </APIProvider>
    </Router>
  );
}

export default App;
