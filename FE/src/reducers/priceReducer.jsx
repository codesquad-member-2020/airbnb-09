import { SET_PRICE, SET_POSITIONS, RESET_PRICE } from "Actions/priceAction";

const priceReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_PRICE:
      return { ...state, min: payload[0], max: payload[1] };
    case SET_POSITIONS:
      return { ...state, pos: state.pos.map((_, i) => payload[i]) };
    case RESET_PRICE:
      return { ...state, min: payload[0], max: payload[1], pos: state.pos.map((_, i) => payload[2][i]) };
    default:
      return state;
  }
};

export default priceReducer;
