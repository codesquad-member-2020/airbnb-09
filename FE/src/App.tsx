import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import theme from "Styles/theme";
import Test from "Components/Test";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledDiv>App</StyledDiv>
      <Test />
    </ThemeProvider>
  );
};

const StyledDiv = styled.div`
  font-size: 10rem;
  background-color: ${props => props.theme.colors.pink};
`;

export default App;
