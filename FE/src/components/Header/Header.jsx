import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";
import logo from "../../assets/logo.svg";

const Header = () => (
  <Wrapper>
    <Logo type="image/svg+xml" data={logo} />
    <Button rounded shadow>
      Login
    </Button>
  </Wrapper>
);

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.object`
  width: 100px;
`;

export default Header;
