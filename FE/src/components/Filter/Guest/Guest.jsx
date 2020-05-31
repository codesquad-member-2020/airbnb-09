import React, { useState, useReducer } from "react";
import styled from "styled-components";
import guestReducer from "Reducers/guestReducer";
import { guestInitialState } from "InitialStates/initialStates";
import FilterButton from "../FilterButton";
import GuestModal from "./GuestModal";

const Guest = ({ dispatchHandler }) => {
  const [toggle, setToggle] = useState(false);
  const [guestNum, dispatch] = useReducer(guestReducer, guestInitialState);

  const renderGuestButtonText = state => {
    let numOfGuests = 0;
    let numOfInfants = 0;

    Object.entries(state).forEach(([type, num]) => {
      if (type !== "infants") numOfGuests += num;
      else numOfInfants += num;
    });

    if (numOfGuests <= 0) return `게스트`;
    return numOfInfants > 0 ? `게스트 ${numOfGuests}명, 유아 ${numOfInfants}명` : `게스트 ${numOfGuests}명`;
  };

  const setFilterState = () => {
    if (toggle) dispatchHandler(guestNum);
    setToggle(!toggle);
  };

  return (
    <GuestWrapper>
      <FilterButton clickHandler={setFilterState} active={toggle} text={renderGuestButtonText(guestNum)} />
      {toggle && <GuestModal setToggle={setFilterState} guestNum={guestNum} dispatch={dispatch} />}
    </GuestWrapper>
  );
};

const GuestWrapper = styled.div`
  position: relative;
`;

export default Guest;
