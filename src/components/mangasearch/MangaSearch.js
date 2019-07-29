import React from "react";

const MangaSearch = ({ searchValue, handleSearchChange, searchManga }) => {
  return (
    <section id="anime-search">
      <div className="container">
        <div className="row">
          <div className="input-group input-group-lg">
            <input
              autoFocus
              value={searchValue}
              onChange={handleSearchChange}
              type="text"
              className="form-control"
              placeholder="Search Manga"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="submit"
                onClick={searchManga}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MangaSearch;
