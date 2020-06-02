import React, { useState, useReducer } from "react";
import styled from "styled-components";

import "moment/locale/ko";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import { START_DATE } from "react-dates/constants";

import dateReducer from "Reducers/dateReducer";
import { dateInitialState } from "InitialStates/initialStates";
import { setDate, resetDate } from "Actions/dateAction";
import FilterButton from "../FilterButton";
import Modal from "../Modal";

const Date = () => {
  const [toggle, setToggle] = useState(false);
  const [dateState, dateDispatch] = useReducer(dateReducer, dateInitialState);
  const { startDate, endDate } = dateState;
  const [focus, setFocus] = useState(START_DATE);

  const setFilterState = () => {
    setToggle(!toggle);
  };

  const onDatesChange = date => dateDispatch(setDate(date));

  const onFocusChange = focusedInput => setFocus(!focusedInput ? START_DATE : focusedInput);

  const modalContent = (
    <DayPickerRangeController
      numberOfMonths={2}
      startDate={startDate}
      endDate={endDate}
      onDatesChange={onDatesChange}
      focusedInput={focus}
      onFocusChange={onFocusChange}
    />
  );

  const modalOptions = {
    contents: modalContent,
    toggleHandler: () => setToggle(false),
  };

  const toMonthDayString = str => {
    return `${str.month() + 1}월 ${str.date()}일`;
  };

  const renderDateButtonText = () => {
    if (endDate) return `${toMonthDayString(startDate)} - ${toMonthDayString(endDate)}`;
    if (startDate) return toMonthDayString(startDate);
    return "체크인/체크아웃";
  };

  return (
    <DateWrapper>
      <FilterButton clickHandler={setFilterState} active={toggle} text={renderDateButtonText()} />
      {toggle && <Modal options={modalOptions} />}
    </DateWrapper>
  );
};

const DateWrapper = styled.div`
  position: relative;
`;

export default Date;
