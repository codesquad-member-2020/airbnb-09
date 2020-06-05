import React, { useState, useReducer } from "react";
import styled from "styled-components";
import guestReducer from "Reducers/guestReducer";
import { guestInitialState } from "InitialStates/initialStates";
import { renderGuestButtonText } from "Utils/utils";
import FilterButton from "../FilterButton";
import GuestModal from "./GuestModal";

const Guest = ({ dispatchHandler }) => {
  const [toggle, setToggle] = useState(false);
  const [guestNum, dispatch] = useReducer(guestReducer, guestInitialState);

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
