import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// Index counter for carousel
let index = 0;

const Carousel = ({ reviews, openModal }) => {
  return (
    <React.Fragment>
      {/** Mobile View **/}
      <CarouselProvider
        className="review-carousel-width d-block d-lg-none"
        naturalSlideWidth={500}
        naturalSlideHeight={1500}
        totalSlides={reviews && reviews.length}
        visibleSlides={3}
        step={3}
      >
        <div className="outer-slide">
          <Slider>
            {reviews &&
              reviews.map(review => (
                <Slide key={review.mal_id} index={index++}>
                  <div className="card review-card">
                    <div className="card-head text-center">
                      <img
                        className="review-img"
                        src={review.reviewer.image_url}
                        alt="reviewer"
                      />
                      <div className="reviewer-name">
                        {review.reviewer.username}
                      </div>
                    </div>

                    <div className="card-body text-center">
                      <p>Overall: {review.reviewer.scores.overall}</p>
                      <p>Story: {review.reviewer.scores.story}</p>
                      <p>Animation: {review.reviewer.scores.animation}</p>
                      <p>Sound: {review.reviewer.scores.sound}</p>
                      <p>Character: {review.reviewer.scores.character}</p>
                      <p>Enjoyment: {review.reviewer.scores.enjoyment}</p>
                    </div>
                    <div
                      onClick={() =>
                        openModal(
                          review.content,
                          review.reviewer.image_url,
                          review.reviewer.username,
                          review.reviewer.scores.overall
                        )
                      }
                      style={{ cursor: "pointer" }}
                      data-target="#reviewModal"
                      data-toggle="modal"
                      className="card-footer"
                    >
                      <span>Read Review</span>
                    </div>
                  </div>
                </Slide>
              ))}
          </Slider>

          <ButtonBack className="back-btn">
            <i className="fas fa-chevron-circle-left icon" />
          </ButtonBack>
          <ButtonNext className="next-btn">
            <i className="fas fa-chevron-circle-right icon" />
          </ButtonNext>
        </div>
      </CarouselProvider>

      {/** DESKTOP VIEW **/}
      <CarouselProvider
        className="review-carousel-width d-none d-lg-block"
        naturalSlideWidth={500}
        naturalSlideHeight={1000}
        totalSlides={reviews && reviews.length}
        visibleSlides={5}
        step={5}
      >
        <div className="outer-slide">
          <Slider>
            {reviews &&
              reviews.map(review => (
                <Slide key={review.mal_id} index={index++}>
                  <div className="card review-card">
                    <div className="card-head text-center">
                      <img
                        className="review-img"
                        src={review.reviewer.image_url}
                        alt="reviewer"
                      />
                      <div className="reviewer-name">
                        {review.reviewer.username}
                      </div>
                    </div>

                    <div className="card-body text-center">
                      <p>Overall: {review.reviewer.scores.overall}</p>
                      <p>Story: {review.reviewer.scores.story}</p>
                      <p>Animation: {review.reviewer.scores.animation}</p>
                      <p>Sound: {review.reviewer.scores.sound}</p>
                      <p>Character: {review.reviewer.scores.character}</p>
                      <p>Enjoyment: {review.reviewer.scores.enjoyment}</p>
                    </div>
                    <div
                      onClick={() =>
                        openModal(
                          review.content,
                          review.reviewer.image_url,
                          review.reviewer.username,
                          review.reviewer.scores.overall
                        )
                      }
                      style={{ cursor: "pointer" }}
                      data-target="#reviewModal"
                      data-toggle="modal"
                      className="card-footer"
                    >
                      <span>Read Review</span>
                    </div>
                  </div>
                </Slide>
              ))}
          </Slider>

          <ButtonBack className="back-btn">
            <i className="fas fa-chevron-circle-left icon" />
          </ButtonBack>
          <ButtonNext className="next-btn">
            <i className="fas fa-chevron-circle-right icon" />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </React.Fragment>
  );
};

export default Carousel;
