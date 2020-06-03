import { CHANGE_ADULTS, CHANGE_CHILDREN, CHANGE_INFANTS, RESET_GUEST } from "Actions/guestAction";
import { guestInitialState } from "InitialStates/initialStates";

const guestReducer = (state, action) => {
  const { adults, children, infants } = state;
  const { type, payload } = action;

  switch (type) {
    case CHANGE_ADULTS:
      return { ...state, adults: adults + payload };
    case CHANGE_CHILDREN:
      return { ...state, children: children + payload };
    case CHANGE_INFANTS:
      return { ...state, infants: infants + payload };
    case RESET_GUEST:
      return { ...guestInitialState };
    default:
      return state;
  }
};

export default guestReducer;
