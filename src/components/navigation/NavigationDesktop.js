import React from "react";
import { NavLink } from "react-router-dom";

const NavigationDesktop = () => {
  return (
    <nav id="side-navigation">
      <div className="sidebar-header">
        <h3>Anime Search</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <NavLink to="/" id="top-anime-menu">
            Top Anime
          </NavLink>
        </li>
        <li>
          <NavLink to="/search-anime" id="search-anime-menu">
            Anime Search
          </NavLink>
        </li>
        <li>
          <NavLink to="/search-manga" id="search-manga-menu">
            Manga Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationDesktop;
