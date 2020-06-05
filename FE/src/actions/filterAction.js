export const FILTER_BY_DATE = "FILTER_BY_DATE";
export const FILTER_BY_GUEST = "FILTER_BY_GUEST";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";

export const filterByDate = payload => {
  return {
    type: FILTER_BY_DATE,
    payload,
  };
};

export const filterByGuest = payload => {
  return {
    type: FILTER_BY_GUEST,
    payload,
  };
};

export const filterByPrice = payload => {
  return {
    type: FILTER_BY_PRICE,
    payload,
  };
};
