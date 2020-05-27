import { fetchActions } from "Actions/actions";

const reducer = (state, action) => {
  const { type, payload } = action;
  const { FETCH_SUCCESS, FETCH_ERROR } = fetchActions;

  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case FETCH_ERROR:
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
