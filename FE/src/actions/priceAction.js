export const SET_PRICE = "SET_PRICE";
export const SET_POSITIONS = "SET_POSITIONS";
export const RESET_PRICE = "RESET_PRICE";

export const setPrice = payload => ({
  type: SET_PRICE,
  payload,
});

export const setPositions = payload => ({
  type: SET_POSITIONS,
  payload,
});

export const resetPrice = payload => ({ type: RESET_PRICE, payload });
