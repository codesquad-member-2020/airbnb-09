export const SET_DATE = "SET_DATE";
export const RESET_DATE = "RESET_DATE";

export const setDate = date => {
  return {
    type: SET_DATE,
    payload: date,
  };
};

export const resetDate = () => {
  return {
    type: RESET_DATE,
  };
};
