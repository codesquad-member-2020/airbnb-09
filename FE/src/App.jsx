import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import theme from "Styles/theme";
import Header from "Components/Header/Header";
import Filter from "Components/Filter/Filter";
import CardList from "Components/CardList/CardList";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Filter />
      <CardList />
    </ThemeProvider>
  );
};

export default App;
