import styled from "styled-components";

// interface Itext {
//   theme: any;
//   textSm: boolean;
// }

const Text = styled.span`
  font-size: ${props => props.textSm && props.theme.fontSizes.sm};
`;

export default Text;

// Test

// import styled from "styled-components";
// import Test from "Components/Test";

// interface TitleProps {
//   readonly isActive: boolean;
// }

// const Title = styled.h1<TitleProps>`
//   color: ${props => (props.isActive ? props.theme.colors.main : props.theme.colors.secondary)};
// `;

// const MyTest = styled(Test)<{ customColor: string }>`
//   color: ${props => props.customColor};
// `;
