import React, { useState, useReducer } from "react";
import styled from "styled-components";
import "react-dates/initialize";
import { DayPickerRangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import guestReducer from "Reducers/guestReducer";
import { guestInitialState } from "InitialStates/initialStates";
import FilterButton from "../FilterButton";
import Modal from "../Modal";

const Date = ({ dispatchHandler }) => {
  const [toggle, setToggle] = useState(false);
  const [guestNum, dispatch] = useReducer(guestReducer, guestInitialState);

  const setFilterState = () => {
    setToggle(!toggle);
  };

  const modalContent = <DayPickerRangeController />;

  const modalOptions = {
    contents: modalContent,
    toggleHandler: () => setToggle(false),
  };

  return (
    <GuestWrapper>
      <FilterButton clickHandler={setFilterState} active={toggle} text="날짜" />
      {toggle && <Modal options={modalOptions} />}
    </GuestWrapper>
  );
};

const GuestWrapper = styled.div`
  position: relative;
`;

export default Date;
