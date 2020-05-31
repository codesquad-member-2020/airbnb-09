import { fetchActions } from "Actions/actions";

const cardReducer = (state, action) => {
  const { type, payload } = action;
  const { FETCH_SUCCESS, FETCH_ERROR } = fetchActions;

  switch (type) {
    case FETCH_SUCCESS:
      return [...state, ...payload];
    case FETCH_ERROR:
      return [...state];
    default:
      return state;
  }
};

export default cardReducer;
