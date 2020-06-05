export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchError = () => {
  return {
    type: FETCH_ERROR,
  };
};
