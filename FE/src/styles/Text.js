import styled from "styled-components";

const Text = styled.span`
  color: ${props => props.theme.colors[props.color]};
  font-size: ${props => props.theme.fontSizes[props.fontSize] || props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeight[props.fontWeight] || props.theme.fontWeight.regular};
  line-height: ${props => props.theme.lineHeight[props.fontSize] || props.theme.lineHeight.md};
`;

export default Text;
