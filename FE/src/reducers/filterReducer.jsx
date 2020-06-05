import { FILTER_BY_DATE, FILTER_BY_GUEST, FILTER_BY_PRICE } from "Actions/filterAction";

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_BY_DATE:
      return { ...state, checkin: payload.checkin, checkout: payload.checkout };
    case FILTER_BY_GUEST:
      return { ...state, adults: payload.adults, children: payload.children, infants: payload.infants };
    case FILTER_BY_PRICE:
      return { ...state, priceMin: payload.min, priceMax: payload.max };
    default:
      return state;
  }
};

export default filterReducer;
