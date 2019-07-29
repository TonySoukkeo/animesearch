import React from "react";
import Swiper from "react-id-swiper";
import { NavLink } from "react-router-dom";

// Params for carousel
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

const SearchDisplay = ({ searchedAnime, isLoading }) => {
  return (
    <section id={searchedAnime.length !== 0 ? "search-display" : ""}>
      <div className="container">
        <div className="row">
          <Swiper {...params} shouldSwiperUpdate>
            {searchedAnime.map(anime => (
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
                  <div style={{ fontWeight: "bold" }}>{anime.type}</div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SearchDisplay;
