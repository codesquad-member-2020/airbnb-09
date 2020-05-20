import React from "react";
import styled from "styled-components";
import Test from "Components/Test";

const App = () => {
  return (
    <>
      <StyledDiv>App</StyledDiv>
      <Test />
    </>
  );
};

const StyledDiv = styled.div`
  background-color: red;
`;

export default App;
