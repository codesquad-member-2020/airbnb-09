import styled from "styled-components";

const Text = styled.span`
  display: inline-block;
  color: ${props => props.theme.colors[props.color]};
  font-size: ${props => props.theme.fontSizes[props.fontSize] || props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights[props.fontWeight] || props.theme.fontWeights.regular};
  line-height: ${props => props.theme.lineHeights[props.fontSize] || props.theme.lineHeights.md};
`;

export default Text;
