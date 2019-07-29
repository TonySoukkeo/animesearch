import React from "react";

const Synopsis = ({ currentAnime }) => {
  return (
    <section id="anime-synopsis">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Synopsis</h1>
            <div className="bottom-border" />
            <p>{currentAnime.synopsis}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synopsis;
