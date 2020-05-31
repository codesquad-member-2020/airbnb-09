export const fetchActions = {
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
};

export const guestActions = {
  CHANGE_GUEST: type => `CHANGE_${type.toUpperCase()}`,
  CHANGE_ADULTS: "CHANGE_ADULTS",
  CHANGE_CHILDREN: "CHANGE_CHILDREN",
  CHANGE_INFANTS: "CHANGE_INFANTS",
  RESET: "RESET",
};
