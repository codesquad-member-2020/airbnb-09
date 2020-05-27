import { fetchActions } from "Actions/actions";

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case fetchActions.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case fetchActions.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

export default reducer;
