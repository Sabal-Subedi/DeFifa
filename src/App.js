import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import PlayerPage from "./components/playerPage/playerPage";
import TeamPage from "./components/teamPage/teamPage";

function App() {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    console.log(theme);
    let background_color = theme ? "white" : "black";
    let player_name = theme ? "black" : "white";
    document.documentElement.style.setProperty(
      "--background-color",
      background_color
    );
    document.documentElement.style.setProperty("--player-name", player_name);
  }, [theme]);

  return (
    <>
      <div className="app-container">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<PlayerPage />} />
          <Route path="/teams" element={<TeamPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
