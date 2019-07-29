import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      id="mobile-nav"
      className="navbar navbar-expand-lg navbar-dark bg-dark py-4 sticky-top"
    >
      <div className="container">
        <a href="#" className="navbar-brand">
          <h3>Anime Search</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li
              data-toggle="collapse"
              data-target="#navbarNav"
              className="nav-item"
            >
              <NavLink to="/" id="top-anime-menu">
                Top Anime
              </NavLink>
            </li>
            <li
              data-toggle="collapse"
              data-target="#navbarNav"
              className="nav-item"
            >
              <NavLink to="/search-anime" id="search-anime-menu">
                Anime Search
              </NavLink>
            </li>
            <li
              data-toggle="collapse"
              data-target="#navbarNav"
              className="nav-item"
            >
              <NavLink to="/search-manga" id="search-manga-menu">
                Manga Search
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
