import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";

const ReservationButton = ({ clickHandler }) => {
  const BUTTON_TEXT = "예약하기";

  return (
    <Wrapper>
      <PrimaryButton primary onClick={clickHandler}>
        {BUTTON_TEXT}
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
