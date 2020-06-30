import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";
import useCookie from "CustomHooks/useCookie";
import { oauthURL } from "Utils/urls";
import { deleteCookie } from "Utils/utils";
import { JWT_TOKEN } from "Constants/constants";
import logo from "Assets/logo.svg";

const Header = () => {
  const TITLE_TEXT = "에어비앤비";
  const LOGIN_TEXT = "로그인";
  const LOGOUT_TEXT = "로그아웃";

  const isCookieExist = useCookie();

  const logOutHandler = e => {
    if (isCookieExist) {
      e.preventDefault();
      deleteCookie(JWT_TOKEN);
      window.location.reload();
    }
  };

  return (
    <Placeholder>
      <Wrapper>
        <LogoLink href="/">
          <Title>{TITLE_TEXT}</Title>
          <Logo type="image/svg+xml" data={logo} />
        </LogoLink>
        <a href={oauthURL} onClick={logOutHandler}>
          <Button rounded shadow>
            {isCookieExist ? LOGOUT_TEXT : LOGIN_TEXT}
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
