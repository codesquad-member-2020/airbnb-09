export const CHANGE_ADULTS = "CHANGE_ADULTS";
export const CHANGE_CHILDREN = "CHANGE_CHILDREN";
export const CHANGE_INFANTS = "CHANGE_INFANTS";
export const RESET_GUEST = "RESET";

export const changeGuest = (type, value) => {
  return {
    type: `CHANGE_${type.toUpperCase()}`,
    payload: value,
  };
};

export const changeAdults = value => {
  return {
    type: CHANGE_ADULTS,
    payload: value,
  };
};

export const changeChildren = value => {
  return {
    type: CHANGE_CHILDREN,
    payload: value,
  };
};

export const changeInfants = value => {
  return {
    type: CHANGE_INFANTS,
    payload: value,
  };
};

export const resetGuest = () => {
  return {
    type: RESET_GUEST,
  };
};
