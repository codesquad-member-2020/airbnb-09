import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";

const GuestButton = ({ clickHandler }) => {
  return (
    <GButton bordered rounded onClick={clickHandler}>
      게스트
    </GButton>
  );
};

const GButton = styled(Button)`
  &::after {
    content: "";
    pointer-events: none;
    position: absolute;
    top: -1px;
    left: -1px;
    border: 2px solid ${props => props.theme.colors.black};
    border-radius: ${props => props.theme.spacings.base};
    background-color: ${props => props.theme.colors.shadow};
    width: calc(100% + 2px);
    height: calc(100% + 2px);
  }
`;

export default GuestButton;
