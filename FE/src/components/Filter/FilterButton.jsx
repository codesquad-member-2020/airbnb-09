import React from "react";
import styled, { css } from "styled-components";
import Button from "Styles/Button";

const FilterButton = ({ clickHandler, active, text }) => {
  return (
    <TogglingButton bordered rounded onClick={clickHandler} active={active}>
      {text}
    </TogglingButton>
  );
};

const TogglingButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme, active }) =>
    active &&
    css`
      &:after {
        content: "";
        pointer-events: none;
        position: absolute;
        top: -1px;
        left: -1px;
        border: 2px solid ${theme.colors.black};
        border-radius: ${theme.spacings.base};
        background-color: ${theme.colors.shadow};
        width: calc(100% + 2px);
        height: calc(100% + 2px);
      }
    `}
`;

export default FilterButton;
