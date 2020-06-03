import React, { useState } from "react";
import styled from "styled-components";
import FilterButton from "../FilterButton";
import PriceModal from "./PriceModal";

const Price = ({ isDateSelected }) => {
  const [toggle, setToggle] = useState(false);

  const PRICE_BUTTON_TEXT = "요금";

  const setFilterState = () => {
    setToggle(!toggle);
  };

  return (
    <PriceWrapper>
      <FilterButton clickHandler={setFilterState} active={toggle} text={PRICE_BUTTON_TEXT} />
      {toggle && <PriceModal setToggle={setFilterState} isDateSelected={isDateSelected} />}
    </PriceWrapper>
  );
};

const PriceWrapper = styled.div`
  position: relative;
`;

export default Price;
