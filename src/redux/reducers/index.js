import { combineReducers } from "redux";
import getTopAnime from "./getTopAnimeReducer";
import loading from "./loading/LoadingReducer";

export default combineReducers({
  getTop: getTopAnime,
  isLoading: loading
});
