import React from "react";
import Swiper from "react-id-swiper";
import { NavLink } from "react-router-dom";

// Params for carousel swiper
const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    type: "none"
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
};

const TopManga = ({ topManga }) => {
  return (
    <section id="trending-manga">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              <Swiper {...params} shouldSwiperUpdate>
                {topManga &&
                  topManga.map(anime => (
                    <div style={{ width: "40%" }} className="card">
                      <NavLink
                        className="nav-link"
                        to={`/anime/${anime.mal_id}_${anime.type}`}
                      >
                        <img
                          src={anime.image_url}
                          alt=""
                          className="anime-card-img"
                        />
                      </NavLink>
                      <div className="card-body">
                        <h6 className="card-title text-center font-weight-bold">
                          {anime.title}
                        </h6>
                        <p className="card-text text-right font-weight-bold">
                          Rating:{" "}
                          <span className="font-weight-normal text-success">
                            {anime.score}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </Swiper>
              <div className="top-anime-title">
                <h2 className="trending-header">Manga</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopManga;
