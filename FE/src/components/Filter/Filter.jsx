import React, { useContext, useEffect } from "react";
import { FilterContext } from "Contexts/filterContext";
import { filterActions } from "Actions/actions";
import styled from "styled-components";
import Date from "./Date/Date";
import Guest from "./Guest/Guest";
import Price from "./Price/Price";

const Filter = () => {
  const { queries, filterDispatch } = useContext(FilterContext);

  // ! useFetch Test
  // ! queries가 같을 때 재 요청을 보내지 않도록
  useEffect(() => {
    console.log(queries);
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
