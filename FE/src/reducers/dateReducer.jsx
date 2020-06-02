import { SET_DATE, RESET_DATE } from "Actions/dateAction";
import { dateInitialState } from "InitialStates/initialStates";

const dateReducer = (state, action) => {
  const {
    type,
    payload: { startDate, endDate },
  } = action;

  switch (type) {
    case SET_DATE:
      return { ...state, startDate, endDate };
    case RESET_DATE:
      return { ...state, ...dateInitialState };
    default:
      return state;
  }
};

export default dateReducer;
