import React, { useState, useRef, useReducer } from "react";
import styled from "styled-components";
import priceReducer from "Reducers/priceReducer";
import { formatPrice, generateFormattedPrices } from "Utils/utils";
import FilterButton from "../FilterButton";
import PriceModal from "./PriceModal";

const prices = {
  average: 132976.97,
  min: 17000,
  max: 3000000,
  priceGap: 10000,
  countList: [120, 50, 225, 47, 4, 80, 14, 0, 10],
};

const Price = ({ dispatchHandler, isDateSelected }) => {
  const [toggle, setToggle] = useState(false);
  const [priceInfo, dispatch] = useReducer(priceReducer, generateFormattedPrices(prices));

  const preventInitialRendering = useRef(true);

  // fetch & update modal contents

  const PRICE_BUTTON_TEXT = "요금";

  const setFilterState = () => {
    console.log(priceInfo);
    if (toggle && isDateSelected) dispatchHandler(priceInfo);
    setToggle(!toggle);
  };

  const renderPriceButtonText = () => {
    if (preventInitialRendering.current) {
      preventInitialRendering.current = false;
      return PRICE_BUTTON_TEXT;
    }
    return priceInfo && isDateSelected && !preventInitialRendering.current
      ? `￦${formatPrice(priceInfo.min)} - ￦${formatPrice(priceInfo.max)}`
      : PRICE_BUTTON_TEXT;
  };

  return (
    <PriceWrapper>
      <FilterButton clickHandler={setFilterState} active={toggle} text={renderPriceButtonText(priceInfo)} />
      {toggle && (
        <PriceModal
          setToggle={setFilterState}
          isDateSelected={isDateSelected}
          priceInfo={priceInfo}
          dispatch={dispatch}
          initialPrice={generateFormattedPrices(prices)}
        />
      )}
    </PriceWrapper>
  );
};

const PriceWrapper = styled.div`
  position: relative;
`;

export default Price;
