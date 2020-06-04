import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { filterInitialState } from "InitialStates/initialStates";
import { FilterContext } from "Contexts/filterContext";
import { CardListContext } from "Contexts/cardListContext";
import { fetchSuccess, fetchError } from "Actions/fetchAction";
import { filterByDate, filterByGuest, filterByPrice } from "Actions/filterAction";
import { isSameObject, isSameValue } from "Utils/utils";
import { generateFilteringURL } from "Utils/urls";
import useFetch from "CustomHooks/useFetch";
import usePrevious from "CustomHooks/usePrevious";
import Date from "./Date/Date";
import Guest from "./Guest/Guest";
import Price from "./Price/Price";

const Filter = () => {
  const { queries, filterDispatch } = useContext(FilterContext);
  const { cardListDispatch } = useContext(CardListContext);
  const previousQueries = usePrevious(queries);
  const isValidRequest = !(isSameValue(queries, filterInitialState) || isSameObject(queries, previousQueries));

  const fetchOptions = {
    url: generateFilteringURL(queries),
    dispatch: cardListDispatch,
    actionType: { success: fetchSuccess, error: fetchError },
    state: queries,
    isValidRequest,
  };

  useFetch(fetchOptions);

  useEffect(() => {
    console.log("[log] filterState:", queries);
  }, [queries]);

  const dateFilterDispatch = date => filterDispatch(filterByDate(date));
  const guestFilterDispatch = guest => filterDispatch(filterByGuest(guest));
  const priceFilterDispatch = price => filterDispatch(filterByPrice(price));

  return (
    <Wrapper>
      <Date dispatchHandler={dateFilterDispatch} />
      <Guest dispatchHandler={guestFilterDispatch} />
      <Price dispatchHandler={priceFilterDispatch} isDateSelected={queries.checkin} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.spacings.unit(12)};
  & > div + div {
    padding: 0 ${({ theme }) => theme.spacings.xsm};
  }
`;

export default Filter;
