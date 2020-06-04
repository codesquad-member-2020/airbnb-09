import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import { START_DATE } from "react-dates/constants";
import isInclusivelyAfterDay from "react-dates/src/utils/isInclusivelyAfterDay";
import { setDate, resetDate } from "Actions/dateAction";
import DateWrapper from "Styles/DateWrapper";
import Modal from "../Modal";

const DateModal = ({ setToggle, dateState, dateDispatch }) => {
  const { startDate, endDate } = dateState;
  const [focus, setFocus] = useState(START_DATE);

  const onDatesChange = date => dateDispatch(setDate(date));
  const onFocusChange = focusedInput => setFocus(!focusedInput ? START_DATE : focusedInput);
  const isOutsideRange = day => !isInclusivelyAfterDay(day, moment());
  const now = moment();
  const nextYear = moment().clone().add(1, "year");

  const modalContent = (
    <DateWrapper>
      <DayPickerRangeController
        numberOfMonths={2}
        startDate={startDate}
        endDate={endDate}
        minDate={now}
        maxDate={nextYear}
        onDatesChange={onDatesChange}
        focusedInput={focus}
        onFocusChange={onFocusChange}
        isOutsideRange={isOutsideRange}
      />
    </DateWrapper>
  );

  const resetButtonHandler = () => {
    setFocus(START_DATE);
    dateDispatch(resetDate());
  };

  const isInputValueExist = !!startDate;

  const modalOptions = {
    contents: modalContent,
    hasContents: isInputValueExist,
    clearHandler: resetButtonHandler,
    toggleHandler: setToggle,
  };

  return <Modal options={modalOptions} />;
};

export default DateModal;
