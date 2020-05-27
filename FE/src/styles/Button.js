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
  border-radius: ${props => props.theme.spacings.xsm};
  padding: ${props => props.theme.spacings.xsm} ${props => props.theme.spacings.base};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.regular};

  /* Shadow Button */
  ${props =>
    props.shadow &&
    css`
      font-weight: ${props.theme.fontWeights.semiBold};
      border: 1px solid transparent;
      box-shadow: ${props.theme.shadows.md};
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: ${props.theme.shadows.lg};
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
        font-weight: ${props.theme.fontWeights.bold};
      `;
    }
    if (props.secondary) {
      return css`
        background-color: ${props.theme.colors.black};
        color: ${props.theme.colors.white};
        font-weight: ${props.theme.fontWeights.semiBold};
      `;
    }
    if (props.rounded) {
      return css`
        border-radius: ${props.theme.spacings.base};
      `;
    }
    if (props.circular) {
      return css`
        padding: 0;
        width: ${props.theme.spacings[props.size] || props.theme.spacings.lg};
        height: ${props.theme.spacings[props.size] || props.theme.spacings.lg};
        border-radius: 50%;
      `;
    }
    if (props.underlined) {
      return css`
        color: ${props.theme.colors.black};
        text-decoration: underline;
        font-weight: ${props.theme.fontWeights.semiBold};
      `;
    }
    return css``;
  }};
`;

export default Button;
