import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";

const ReservationButton = () => {
  const BUTTON_TEXT = "예약하기";

  return (
    <Wrapper>
      <PrimaryButton primary>{BUTTON_TEXT}</PrimaryButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: ${props => props.theme.spacing.sm};
`;

const PrimaryButton = styled(Button)`
  float: right;
`;

export default ReservationButton;
