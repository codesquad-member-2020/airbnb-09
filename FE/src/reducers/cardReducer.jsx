import { fetchActions } from "Actions/actions";

const reducer = (state, action) => {
  const { type, payload } = action;
  const { FETCH_SUCCESS, FETCH_ERROR } = fetchActions;
  const ERROR_MESSAGE = "Something went wrong!";

  switch (type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: ERROR_MESSAGE,
      };
    default:
      return state;
  }
};

export default reducer;
