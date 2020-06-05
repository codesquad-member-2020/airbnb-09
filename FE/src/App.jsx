import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import styleTheme from "Styles/theme";
import Header from "Components/Header/Header";
import Filter from "Components/Filter/Filter";
import CardList from "Components/CardList/CardList";
import { CardListProvider } from "Contexts/cardListContext";
import { FilterProvider } from "Contexts/filterContext";

const App = () => {
  return (
    <ThemeProvider theme={styleTheme}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <CardListProvider>
          <FilterProvider>
            <Filter />
            <CardList />
          </FilterProvider>
        </CardListProvider>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacings.base};
`;

export default App;
