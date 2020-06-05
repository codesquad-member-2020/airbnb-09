import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";
import logo from "Assets/logo.svg";
import { oauthURL } from "Utils/urls";

const Header = () => {
  const TITLE_TEXT = "에어비앤비";
  const LOGIN_TEXT = "로그인";

  return (
    <Placeholder>
      <Wrapper>
        <LogoLink href="/">
          <Title>{TITLE_TEXT}</Title>
          <Logo type="image/svg+xml" data={logo} />
        </LogoLink>
        <a href={oauthURL}>
          <Button rounded shadow>
            {LOGIN_TEXT}
          </Button>
        </a>
      </Wrapper>
    </Placeholder>
  );
};

const Placeholder = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacings.unit(20)};
`;

const Wrapper = styled.header`
  z-index: 100;
  width: 100%;
  height: inherit;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacings.base};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const LogoLink = styled.a`
  z-index: 1;
  height: inherit;
  display: flex;
`;

const Logo = styled.object`
  pointer-events: none;
  width: ${({ theme }) => theme.spacings.unit(25)};
`;

const Title = styled.h1`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export default Header;
