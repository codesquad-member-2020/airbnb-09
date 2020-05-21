import React from "react";
import styled from "styled-components";
import Test from "Components/Test";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyledDiv>App</StyledDiv>
      <Test />
    </>
  );
};

const StyledDiv = styled.div`
  background-color: red;
`;

export default App;
