import React, { useState, useReducer } from "react";
import styled from "styled-components";
import dateReducer from "Reducers/dateReducer";
import { dateInitialState } from "InitialStates/initialStates";
import { formatDate, toMonthDayString } from "Utils/utils";
import FilterButton from "../FilterButton";
import DateModal from "./DateModal";

const Date = ({ dispatchHandler }) => {
  const [toggle, setToggle] = useState(false);
  const [dateState, dateDispatch] = useReducer(dateReducer, dateInitialState);
  const { startDate, endDate } = dateState;

  const setFilterState = () => {
    if (toggle && dateState.startDate) {
      if (!dateState.endDate) {
        const nextDay = dateState.startDate.clone().add(1, "days");
        dispatchHandler({
          checkin: formatDate(dateState.startDate),
          checkout: formatDate(nextDay),
        });
      } else
        dispatchHandler({
          checkin: formatDate(dateState.startDate),
          checkout: formatDate(dateState.endDate),
        });
    }
    setToggle(!toggle);
  };

  const renderDateButtonText = () => {
    if (endDate) return `${toMonthDayString(startDate)} - ${toMonthDayString(endDate)}`;
    if (startDate) return toMonthDayString(startDate);
    return "체크인/체크아웃";
  };

  return (
    <DateWrapper>
      <FilterButton clickHandler={setFilterState} active={toggle} text={renderDateButtonText()} />
      {toggle && <DateModal setToggle={setFilterState} dateState={dateState} dateDispatch={dateDispatch} />}
    </DateWrapper>
  );
};

const DateWrapper = styled.div`
  position: relative;
`;

export default Date;
