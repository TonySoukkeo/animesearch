import {
  GET_TOP_ANIME,
  GET_ANIME_DETAILS,
  GET_TOP_MANGA,
  GET_ANIME_REVIEWS,
  SEARCH_ANIME,
  SEARCH_MANGA,
  RELATED_ANIME,
  RESET_ANIME_PROPS
} from "./AnimeTypes";
import { LOADING } from "../loading/LoadingType";

// Get top anime for home page
export const getTopAnime = () => async dispatch => {
  const url = "https://api.jikan.moe/v3/top/anime/",
    topAnime = await fetch(url)
      .then(res => res.json())
      .then(data => data.top)
      .catch(err => console.log(err));

  dispatch({
    type: GET_TOP_ANIME,
    payload: topAnime
  });
};

// Get top manga for homepage
export const getTopManga = () => async dispatch => {
  const url = "https://api.jikan.moe/v3/top/manga/",
    topManga = await fetch(url)
      .then(res => res.json())
      .then(data => data.top)
      .catch(err => console.log(err));

  dispatch({
    type: GET_TOP_MANGA,
    payload: topManga
  });
};

// Get current anime details
export const getAnimeDetails = (id, type) => async dispatch => {
  const url = `https://api.jikan.moe/v3/${type}/${id}`,
    currentAnime = await fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.log(err));

  dispatch({
    type: GET_ANIME_DETAILS,
    payload: currentAnime
  });
};

// Get current anime episodes
export const getAnimeReview = (id, type) => async dispatch => {
  const url = `https://api.jikan.moe/v3/${type}/${id}/reviews`,
    reviews = await fetch(url)
      .then(res => res.json())
      .then(data => data.reviews)
      .catch(err => console.log(err));

  dispatch({
    type: GET_ANIME_REVIEWS,
    payload: reviews
  });
};

// Search Anime
export const animeSearch = anime => async dispatch => {
  // Reformat anime string
  const newAnimeStr = anime.replace(/\s/gi, "%20"),
    url = `https://api.jikan.moe/v3/search/anime/?q=${newAnimeStr}&limit=30`,
    animeSearch = await fetch(url)
      .then(res => res.json())
      .then(data => data.results)
      .catch(err => console.log(err));

  dispatch({
    type: SEARCH_ANIME,
    payload: animeSearch
  });

  // Set loading state to false
  dispatch({
    type: LOADING,
    payload: false
  });
};

// Search Manga
export const mangaSearch = manga => async dispatch => {
  // Reformat anime string
  const newMangaStr = manga.replace(/\s/gi, "%20"),
    url = `https://api.jikan.moe/v3/search/manga/?q=${newMangaStr}&limit=30`,
    mangaSearch = await fetch(url)
      .then(res => res.json())
      .then(data => data.results)
      .catch(err => console.log(err));

  dispatch({
    type: SEARCH_MANGA,
    payload: mangaSearch
  });

  // Set loading state to false
  dispatch({
    type: LOADING,
    payload: false
  });
};

// Get related anime for current anime
export const relatedAnime = items => async dispatch => {
  const related = [];
  // Loop through array and do an api to each obj
  for (let i = 0; i < items.length; i++) {
    const anime = await fetch(
      `https://api.jikan.moe/v3/${items[i].type}/${items[i].id}`
    )
      .then(res => res.json())
      .then(data => data);
    related.push(anime);
  }
  dispatch({
    type: RELATED_ANIME,
    payload: related
  });

  dispatch({
    type: LOADING,
    payload: false
  });
};

// Reset anime props when component unmounts
export const resetAnimeProps = () => dispatch => {
  dispatch({
    type: RESET_ANIME_PROPS,
    payload: []
  });
};
