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
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { AuthContextProvider } from "./context/AuthContext";
import Spells from "./components/Spells";

function App() {
  const [selectedIdData, setSelectedIdData] = useState<string | null>(null);

  const handleSelectedId = (selectedId: string) => {
    setSelectedIdData(selectedId);
  };

  const context = useContext(AuthContext);

  if (!context) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <AuthContextProvider>
        <APIProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/characters"
              element={
                <ProtectedRoute>
                  <CharactersList selectedId={handleSelectedId} />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="/characterCard"
              element={<CharacterCard idForCard={selectedIdData} />}
            />
            <Route
              path="/spells"
              element={
                <ProtectedRoute>
                  <Spells />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </APIProvider>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
