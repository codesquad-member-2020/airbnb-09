import React from "react";
import styled from "styled-components";
import Date from "./Date/Date";
import Guest from "./Guest/Guest";
import Price from "./Price/Price";

const Filter = () => {
  return (
    <Wrapper>
      <Date />
      <Guest />
      <Price />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding-top: ${props => props.theme.spacings.unit(12)};
  & > div {
    padding: 0 ${props => props.theme.spacings.xsm};
  }
`;

export default Filter;
