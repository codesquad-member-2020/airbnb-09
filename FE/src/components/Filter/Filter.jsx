import React, { useContext, useEffect } from "react";
import { FilterContext } from "Contexts/filterContext";
import styled from "styled-components";
import Date from "./Date/Date";
import Guest from "./Guest/Guest";
import Price from "./Price/Price";

const Filter = () => {
  const { queries, filterDispatch } = useContext(FilterContext);

  // useFetch Test
  useEffect(() => {
    console.log(queries);
  }, [queries]);

  const handleDispatch = () => {};

  return (
    <Wrapper>
      <Date />
      <Guest handleDispatch={handleDispatch} />
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
