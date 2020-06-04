import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";
import { RESERVATION_BUTTON_TEXT } from "Constants/constants";

const ReservationButton = ({ clickHandler }) => {
  return (
    <Wrapper>
      <PrimaryButton primary onClick={clickHandler}>
        {RESERVATION_BUTTON_TEXT}
      </PrimaryButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxsm};
`;

const PrimaryButton = styled(Button)`
  float: right;
`;

export default ReservationButton;
