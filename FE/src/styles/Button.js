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
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeight.regular};

  /* Shadow Button */
  ${props =>
    props.shadow &&
    css`
      border: 1px solid transparent;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    `}

  /* Border Button */
  ${props =>
    props.bordered &&
    css`
      border: 1px solid ${props.theme.colors.gray4};
      &:hover {
        border: 1px solid ${props.theme.colors.gray1};
      }
    `}

  /* White Button hover gray */
  ${props =>
    props.highlighted &&
    css`
      &:hover {
        background-color: ${props.theme.colors.gray6};
      }
    `}

  /* Main Button types */
  ${props => {
    if (props.primary) {
      return css`
        background-color: ${props.theme.colors.pink};
        color: ${props.theme.colors.white};
        font-size: ${props.theme.fontSizes.md};
        font-weight: ${props.theme.fontWeight.bold};
      `;
    }
    if (props.secondary) {
      return css`
        background-color: ${props.theme.colors.black};
        color: ${props.theme.colors.white};
        font-weight: ${props.theme.fontWeight.semiBold};
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
        width: ${props.theme.spacing[props.size] || props.theme.spacing.lg};
        height: ${props.theme.spacing[props.size] || props.theme.spacing.lg};
        border-radius: 50%;
      `;
    }
    if (props.underlined) {
      return css`
        color: ${props.theme.colors.black};
        text-decoration: underline;
        font-weight: ${props.theme.fontWeight.semiBold};
      `;
    }
    return css``;
  }};
`;

export default Button;
