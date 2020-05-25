import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import theme from "Styles/theme";
import Header from "Components/Header/Header";
import Filter from "Components/Filter/Filter";
import CardList from "Components/CardList/CardList";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Filter />
        <CardList />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export default App;
