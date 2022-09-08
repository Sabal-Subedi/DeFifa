import React from "react";
import { CgDarkMode } from "react-icons/cg";
import "./layout.scss";
import fifaLogo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  return (
    <div className="navbar-container ps-3 pe-3">
      <div className="nav-left">
        <div className="nav-logo">
          <img src={fifaLogo} alt="FIFA22" className="actual-logo" />
        </div>
        <NavLink activeClassName="active" className="navLink" to="/">
          PLAYERS
        </NavLink>
        <NavLink activeClassName="active" className="navLink" to="/teams">
          TEAMS
        </NavLink>
      </div>
      <div className="nav-right">
        <CgDarkMode
          size={22}
          onClick={() => setTheme(!theme)}
          className={theme ? "light-theme" : "dark-theme"}
        />
      </div>
    </div>
  );
}
