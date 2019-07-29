import React from "react";
import Carousel from "./carousel/Carousel";

// Index counter for carousel
let index = 0;

const Reviews = ({ reviews, openModal }) => {
  return (
    <section id="reviews">
      <div className="container mb-5">
        <h1>Reviews</h1>
        <div className="row">
          {reviews ? (
            <Carousel reviews={reviews} openModal={openModal} />
          ) : (
            <div>
              <p>No reviews</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
