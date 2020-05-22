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
      <StyledDiv>
        <Text fontSize="lg" fontWeight="extraBold">
          App
        </Text>
      </StyledDiv>
      <Button primary>Primary Button</Button>
      <Button secondary>Secondary Button</Button>
      <Button secondary disabled>
        Secondary Button Disabled
      </Button>
      <Button rounded bordered>
        Border Button
      </Button>
      <Button circular bordered>
        +
      </Button>
      <Button circular highlighted>
        +
      </Button>
      <Button underlined highlighted>
        Underlined
      </Button>
      <Button rounded shadow>
        Shadow Button
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
