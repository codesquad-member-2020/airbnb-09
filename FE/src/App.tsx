import React from "react";
import styled from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import Test from "Components/Test";

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
