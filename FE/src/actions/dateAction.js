export const SET_DATE = "SET_DATE";
export const RESET_DATE = "RESET_DATE";

export const setDate = payload => {
  return {
    type: SET_DATE,
    payload,
  };
};

export const resetDate = () => {
  return {
    type: RESET_DATE,
  };
};
