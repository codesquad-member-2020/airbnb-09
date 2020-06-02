import { SET_DATE, RESET_DATE } from "Actions/dateAction";
import { dateInitialState } from "InitialStates/initialStates";

const dateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DATE:
      return { ...state, startDate: payload.startDate, endDate: payload.endDate };
    case RESET_DATE:
      return { ...dateInitialState };
    default:
      return state;
  }
};

export default dateReducer;
