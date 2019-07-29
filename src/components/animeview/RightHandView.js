import React from "react";

const RightHandView = ({ currentAnime }) => {
  return (
    <div className="col-lg-7">
      {/** TRAILER **/}
      <div id="trailer">
        {!currentAnime.trailer_url ? (
          <div>No Trailer to show</div>
        ) : (
          <iFrame
            src={currentAnime.trailer_url + `?autoplay=0&rel=0`}
            height="400"
            width="100%"
          />
        )}
      </div>
      {/** GENRES **/}
      <section id="genres">
        {currentAnime.genres &&
          currentAnime.genres.map(genre => (
            <span className="badge badge-info mr-3 mb-3 py-3 px-4">
              {genre.name}
            </span>
          ))}
      </section>
    </div>
  );
};

export default RightHandView;
