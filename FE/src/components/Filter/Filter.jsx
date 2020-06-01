import React, { useContext, useEffect } from "react";
import axios from "axios";
import { filterInitialState } from "InitialStates/initialStates";
import { FilterContext } from "Contexts/filterContext";
import { CardListContext } from "Contexts/cardListContext";
import { fetchActions, filterActions } from "Actions/actions";
import useFetch from "CustomHooks/useFetch";
import styled from "styled-components";
import Date from "./Date/Date";
import Guest from "./Guest/Guest";
import Price from "./Price/Price";

const Filter = () => {
  const { queries, filterDispatch } = useContext(FilterContext);
  const { cardListDispatch } = useContext(CardListContext);

  const { checkin, checkout, adults, children, infants, priceMin, priceMax } = queries;

  // Todo:
  // ! queries가 같을 때 재요청을 보내지 않도록 처리
  // ! useFetch 사용 여부 확인

  useEffect(() => {
    if (queries === filterInitialState) return;
    const getData = async () => {
      const url = `http://3.34.15.148/api/listing/search?checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&priceMin=${priceMin}&priceMax=${priceMax}`;
      const { data } = await axios.get(url);
      cardListDispatch({ type: fetchActions.FETCH_SUCCESS, payload: data });
    };
    getData();
  }, [queries]);

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
