import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "Styles/GlobalStyle";
import theme from "Styles/theme";
import Text from "Styles/Text";
import Button from "Styles/Button";
import Test from "Components/Test";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledDiv>App</StyledDiv>
      <Button primary>
        <Text fontSize="md" fontWeight="bold">
          Primary Button
        </Text>
      </Button>
      <Button secondary>
        <Text fontSize="md">Secondary Button</Text>
      </Button>
      <Button secondary disabled>
        <Text fontSize="md">Secondary Button Disabled</Text>
      </Button>
      <Button rounded bordered>
        <Text fontSize="md">Border Button</Text>
      </Button>
      <Button circular bordered>
        <Text fontSize="md">+</Text>
      </Button>
      <Test />
    </ThemeProvider>
  );
};

const StyledDiv = styled.div`
  font-size: ${props => props.theme.fontSizes.lg};
  background-color: ${props => props.theme.colors.pink};
`;

export default App;
