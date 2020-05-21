import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import theme from "Styles/theme";
import Text from "Styles/Text";
import Test from "Components/Test";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledDiv>App</StyledDiv>
      <Text textSm>small Text</Text>
      <Test />
    </ThemeProvider>
  );
};

const StyledDiv = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  background-color: ${props => props.theme.colors.pink};
`;

export default App;
