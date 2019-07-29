import { LOADING } from "./LoadingType";

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
}
