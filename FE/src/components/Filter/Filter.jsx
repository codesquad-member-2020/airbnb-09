import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";
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
  padding-top: ${props => props.theme.spacings.unit(12)};
  ${Button} {
    margin-right: ${props => props.theme.spacings.xsm};
  }
`;

export default Filter;
