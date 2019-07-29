import { LOADING } from "./LoadingType";

export const loading = value => dispatch => {
  dispatch({
    type: LOADING,
    payload: value
  });
};
