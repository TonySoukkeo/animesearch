import React from "react";

const LeftHandView = ({ currentAnime }) => {
  return (
    <div id="anime-left-display" className="col-lg-5">
      <div className="card">
        <img
          className="anime-view-card"
          src={currentAnime.image_url}
          alt={currentAnime.title_english}
        />
        <div className="card-body">
          <div className="card-title text-center font-weight-bold">
            {currentAnime.title_english || currentAnime.title}
          </div>
          <p className="text-center text-success">{currentAnime.rating}</p>
          <p className="card-text">
            <span class="font-weight-bold">Type:</span> {currentAnime.type}
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Airing:</span>{" "}
            {currentAnime.status}
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Episodes:</span>{" "}
            {currentAnime.episodes || "NA"}
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Rating:</span>{" "}
            {currentAnime.score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftHandView;
