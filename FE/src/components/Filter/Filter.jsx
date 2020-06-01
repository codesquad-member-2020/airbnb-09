import React, { useContext } from "react";
import { filterInitialState } from "InitialStates/initialStates";
import { FilterContext } from "Contexts/filterContext";
import { CardListContext } from "Contexts/cardListContext";
import { fetchActions, filterActions } from "Actions/actions";
import { isSameObject, isSameValue } from "Utils/utils";
import useFetch from "CustomHooks/useFetch";
import usePrevious from "CustomHooks/usePrevious";
import styled from "styled-components";
import Date from "./Date/Date";
import Guest from "./Guest/Guest";
import Price from "./Price/Price";

const Filter = () => {
  const { queries, filterDispatch } = useContext(FilterContext);
  const { cardListDispatch } = useContext(CardListContext);
  const { checkin, checkout, adults, children, infants, priceMin, priceMax } = queries;
  const previousQueries = usePrevious(queries);
  const isValidRequest = !(isSameValue(queries, filterInitialState) || isSameObject(queries, previousQueries));

  const fetchOptions = {
    url: `${process.env.API_KEY}/search?checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&priceMin=${priceMin}&priceMax=${priceMax}`,
    dispatch: cardListDispatch,
    actionType: { success: fetchActions.FETCH_SUCCESS },
    state: queries,
    isValidRequest,
  };

  useFetch(fetchOptions);

  const filterByGuest = payload => filterDispatch({ type: filterActions.FILTER_BY_GUEST, payload });

  return (
    <Wrapper>
      <Date />
      <Guest dispatchHandler={filterByGuest} />
      <Price />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.spacings.unit(12)};
  & > div {
    padding: 0 ${({ theme }) => theme.spacings.xsm};
  }
`;

export default Filter;
