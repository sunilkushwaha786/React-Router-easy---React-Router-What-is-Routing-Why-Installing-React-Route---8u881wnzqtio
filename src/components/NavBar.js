import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="index-link">
            Index Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" className="home-link">
            Home Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
