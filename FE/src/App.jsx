import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import theme from "Styles/theme";
import Header from "Components/Header/Header";
import Filter from "Components/Filter/Filter";
import CardList from "Components/CardList/CardList";
import { CardListProvider } from "Contexts/cardListContext";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Filter />
        <CardListProvider>
          <CardList />
        </CardListProvider>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 ${props => props.theme.spacings.base};
`;

export default App;
