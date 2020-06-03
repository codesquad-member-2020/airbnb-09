import React, { useState } from "react";
import "moment/locale/ko";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayPickerRangeController } from "react-dates";
import { START_DATE } from "react-dates/constants";
import { setDate, resetDate } from "Actions/dateAction";
import Modal from "../Modal";

const DateModal = ({ setToggle, dateState, dateDispatch }) => {
  const { startDate, endDate } = dateState;
  const [focus, setFocus] = useState(START_DATE);

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
