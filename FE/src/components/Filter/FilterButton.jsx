import React from "react";
import styled, { css } from "styled-components";
import Button from "Styles/Button";

const FilterButton = ({ clickHandler, active, name }) => {
  return (
    <TogglingButton bordered rounded onClick={clickHandler} active={active}>
      {name}
    </TogglingButton>
  );
};

const TogglingButton = styled(Button)`
  ${props =>
    props.active &&
    css`
      &:after {
        content: "";
        pointer-events: none;
        position: absolute;
        top: -1px;
        left: -1px;
        border: 2px solid ${props.theme.colors.black};
        border-radius: ${props.theme.spacings.base};
        background-color: ${props.theme.colors.shadow};
        width: calc(100% + 2px);
        height: calc(100% + 2px);
      }
    `}
`;

export default FilterButton;
