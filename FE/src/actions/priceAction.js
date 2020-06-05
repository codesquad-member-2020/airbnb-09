export const SET_INITIAL_PRICE_INFO = "SET_INITIAL_PRICE_INFO";
export const SET_PRICE = "SET_PRICE";
export const SET_POSITIONS = "SET_POSITIONS";
export const RESET_PRICE = "RESET_PRICE";

export const setInitialPriceInfo = payload => ({
  type: SET_INITIAL_PRICE_INFO,
  payload,
});

export const setPrice = payload => ({
  type: SET_PRICE,
  payload,
});

export const setPositions = payload => ({
  type: SET_POSITIONS,
  payload,
});

export const resetPrice = payload => ({ type: RESET_PRICE, payload });
