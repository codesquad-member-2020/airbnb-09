import { FETCH_SUCCESS, FETCH_ERROR } from "Actions/fetchAction";

const cardReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SUCCESS:
      return [...payload];
    case FETCH_ERROR:
      return [...state];
    default:
      return state;
  }
};

export default cardReducer;
