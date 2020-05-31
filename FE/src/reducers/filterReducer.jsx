import { filterActions } from "Actions/actions";

const cardReducer = (state, action) => {
  const { type, payload } = action;
  const { FILTER_BY_DATE, FILTER_BY_GUEST, FILTER_BY_PRICE } = filterActions;

  switch (type) {
    case FILTER_BY_DATE:
      return [...state, ...payload];
    case FILTER_BY_GUEST:
      return [...state, ...payload];
    case FILTER_BY_PRICE:
      return [...state, ...payload];
    default:
      return state;
  }
};

export default cardReducer;
