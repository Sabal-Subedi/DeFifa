import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import SplashPage from "./components/splashPage/splashPage";

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
        <SplashPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
