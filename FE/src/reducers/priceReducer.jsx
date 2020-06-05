import { SET_INITIAL_PRICE_INFO, SET_PRICE, SET_POSITIONS, RESET_PRICE } from "Actions/priceAction";
import { generateFormattedPrices } from "Utils/utils";

const priceReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_INITIAL_PRICE_INFO:
      return generateFormattedPrices(payload);
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
