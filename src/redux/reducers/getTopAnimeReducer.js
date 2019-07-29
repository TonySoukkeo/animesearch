import {
  GET_TOP_ANIME,
  GET_TOP_MANGA,
  GET_ANIME_DETAILS,
  GET_ANIME_REVIEWS,
  SEARCH_ANIME,
  SEARCH_MANGA,
  RELATED_ANIME,
  RESET_ANIME_PROPS
} from "./actions/AnimeTypes";

const initialState = {
  topAnime: [],
  topManga: [],
  currentAnime: [],
  reviews: [],
  animeSearch: [],
  mangaSearch: [],
  relatedAnime: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOP_ANIME:
      return {
        ...state,
        topAnime: action.payload
      };

    case GET_TOP_MANGA:
      return {
        ...state,
        topManga: action.payload
      };

    case GET_ANIME_DETAILS:
      return {
        ...state,
        currentAnime: action.payload
      };

    case GET_ANIME_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case SEARCH_ANIME:
      return {
        ...state,
        animeSearch: action.payload
      };

    case SEARCH_MANGA:
      return {
        ...state,
        mangaSearch: action.payload
      };

    case RESET_ANIME_PROPS:
      return {
        ...state,
        currentAnime: action.payload,
        reviews: action.payload,
        relatedAnime: action.payload
      };

    case RELATED_ANIME:
      return {
        ...state,
        relatedAnime: action.payload
      };
    default:
      return state;
  }
}
