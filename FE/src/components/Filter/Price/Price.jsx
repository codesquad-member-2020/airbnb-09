import React, { useState } from "react";
import styled from "styled-components";
import { generateFormattedPrices } from "Utils/utils";
import FilterButton from "../FilterButton";
import PriceModal from "./PriceModal";

const prices = {
  average: 132976.97,
  minPrice: 17000,
  maxPrice: 3000000,
  priceGap: 10000,
  countList: [120, 50, 225, 47, 4, 80, 14, 0, 10],
};

const Price = ({ isDateSelected }) => {
  const [toggle, setToggle] = useState(false);

  // fetch & update modal contents

  const PRICE_BUTTON_TEXT = "요금";

  const setFilterState = () => {
    setToggle(!toggle);
  };

  return (
    <PriceWrapper>
      <FilterButton clickHandler={setFilterState} active={toggle} text={PRICE_BUTTON_TEXT} />
      {toggle && (
        <PriceModal setToggle={setFilterState} isDateSelected={isDateSelected} data={generateFormattedPrices(prices)} />
      )}
    </PriceWrapper>
  );
};

const PriceWrapper = styled.div`
  position: relative;
`;

export default Price;
