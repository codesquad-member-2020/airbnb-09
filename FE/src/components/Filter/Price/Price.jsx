import React, { useState, useRef, useReducer, useContext } from "react";
import styled from "styled-components";
import priceReducer from "Reducers/priceReducer";
import { formatPrice } from "Utils/utils";
import { fetchError } from "Actions/fetchAction";
import { setInitialPriceInfo } from "Actions/priceAction";
import useFetch from "CustomHooks/useFetch";
import { FilterContext } from "Contexts/filterContext";
import { generatePriceURL } from "Utils/urls";
import FilterButton from "../FilterButton";
import PriceModal from "./PriceModal";

const Price = ({ dispatchHandler, isDateSelected }) => {
  const [toggle, setToggle] = useState(false);
  const [initialData, setInitialData] = useState(null);
  const { queries } = useContext(FilterContext);
  const [priceInfo, dispatch] = useReducer(priceReducer, null);

  const PRICE_BUTTON_TEXT = "요금";

  const preventInitialRendering = useRef(true);

  const isValidRequest = queries.checkin && queries.checkout;

  const fetchOptions = {
    url: generatePriceURL(queries),
    dispatch,
    actionType: { success: setInitialPriceInfo, error: fetchError },
    state: queries,
    isValidRequest,
    dataSettingFn: setInitialData,
  };

  useFetch(fetchOptions);

  const setFilterState = () => {
    if (toggle && isDateSelected) {
      dispatchHandler(priceInfo);
    }
    setToggle(!toggle);
  };

  const renderPriceButtonText = () => {
    if (preventInitialRendering.current && !isDateSelected) {
      preventInitialRendering.current = false;
      return PRICE_BUTTON_TEXT;
    }
    return priceInfo && isDateSelected && !preventInitialRendering.current
      ? `￦${formatPrice(priceInfo.min)} - ￦${formatPrice(priceInfo.max)}`
      : PRICE_BUTTON_TEXT;
  };

  return (
    <PriceWrapper>
      <FilterButton clickHandler={setFilterState} active={toggle} text={renderPriceButtonText()} />
      {toggle && (
        <PriceModal
          setToggle={setFilterState}
          isDateSelected={isDateSelected}
          priceInfo={priceInfo}
          dispatch={dispatch}
          initialData={initialData}
        />
      )}
    </PriceWrapper>
  );
};

const PriceWrapper = styled.div`
  position: relative;
`;

export default Price;
