import styled, { css } from "styled-components";

const Button = styled.button`
  position: relative;
  text-align: center;
  border: none;
  outline: none;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme, color }) => theme.colors[color] || theme.colors.gray2};
  border-radius: ${({ theme }) => theme.spacings.xsm};
  padding: ${({ theme }) => theme.spacings.xsm} ${({ theme }) => theme.spacings.base};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  /* Shadow Button */
  ${({ theme, shadow }) =>
    shadow &&
    css`
      font-weight: ${theme.fontWeights.semiBold};
      border: 1px solid transparent;
      box-shadow: ${theme.shadows.md};
      transition: box-shadow 0.2s ease;
      &:hover {
        box-shadow: ${theme.shadows.lg};
      }
    `}

  /* Border Button */
  ${({ theme, bordered }) =>
    bordered &&
    css`
      border: 1px solid ${theme.colors.gray4};
      &:hover {
        border: 1px solid ${theme.colors.gray1};
      }
    `}

  /* White Button hover gray */
  ${({ theme, highlighted }) =>
    highlighted &&
    css`
      &:hover {
        background-color: ${theme.colors.gray6};
      }
    `}

  /* Main Button types */
  ${({ theme, ...props }) => {
    if (props.primary) {
      return css`
        background-color: ${theme.colors.pink};
        color: ${theme.colors.white};
        font-size: ${theme.fontSizes.md};
        font-weight: ${theme.fontWeights.bold};
      `;
    }
    if (props.secondary) {
      return css`
        padding: ${theme.spacings.xsm} ${theme.spacings.sm};
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
        font-weight: ${theme.fontWeights.semiBold};
      `;
    }
    if (props.rounded) {
      return css`
        border-radius: ${theme.spacings.base};
      `;
    }
    if (props.circular) {
      return css`
        padding: 0;
        width: ${theme.spacings[props.size] || theme.spacings.lg};
        height: ${theme.spacings[props.size] || theme.spacings.lg};
        border-radius: 50%;
        line-height: 0;
      `;
    }
    if (props.underlined) {
      return css`
        padding: ${theme.spacings.xsm} ${theme.spacings.sm};
        color: ${theme.colors.black};
        text-decoration: underline;
        font-weight: ${theme.fontWeights.semiBold};
      `;
    }
    return css``;
  }};
`;

export default Button;
