import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  text-align: center;
  border: none;
  outline: none;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors[props.color] || props.theme.colors.gray2};
  border-radius: ${props => props.theme.spacing.xsm};
  padding: ${props => props.theme.spacing.xsm} ${props => props.theme.spacing.base};

  ${props =>
    props.bordered &&
    css`
      border: 1px solid ${props.theme.colors.gray4};
      &:hover {
        border: 1px solid ${props.theme.colors.gray1};
      }
    `}

  ${props => {
    if (props.primary) {
      return css`
        background-color: ${props.theme.colors.pink};
        color: ${props.theme.colors.white};
      `;
    }
    if (props.secondary) {
      return css`
        background-color: ${props.theme.colors.black};
        color: ${props.theme.colors.white};
      `;
    }
    if (props.rounded) {
      return css`
        border-radius: ${props.theme.spacing.base};
      `;
    }
    if (props.circular) {
      return css`
        padding: 0;
        width: ${props.theme.spacing.lg};
        height: ${props.theme.spacing.lg};
        border-radius: 50%;
      `;
    }
    return css``;
  }};
`;

export default Button;
