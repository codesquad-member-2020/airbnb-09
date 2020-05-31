import React from "react";
import styled, { css } from "styled-components";
import Button from "Styles/Button";

const Modal = ({ options: { contents = "", hasContents = false, clearHandler = null, toggleHandler = null } }) => {
  const SAVE_BUTTON_TEXT = "저장";
  const CLEAR_BUTTON_TEXT = "지우기";

  return (
    <ModalWrapper>
      <ContentsWrapper>{contents}</ContentsWrapper>
      <ButtonsWrapper>
        <Buttons>
          <ClearButton highlighted underlined disabled={!hasContents} onClick={clearHandler}>
            {CLEAR_BUTTON_TEXT}
          </ClearButton>
          <Button secondary onClick={toggleHandler}>
            {SAVE_BUTTON_TEXT}
          </Button>
        </Buttons>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: ${({ theme }) => theme.spacings.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  border-radius: ${({ theme }) => theme.spacings.unit(3)};
`;

const ContentsWrapper = styled.div`
  min-width: ${({ theme }) => theme.spacings.unit(80)};
  padding: ${({ theme }) => theme.spacings.base};
  overflow-x: hidden;
  overflow-y: auto;
`;

const ButtonsWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.gray5};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearButton = styled(Button)`
  padding: ${({ theme }) => theme.spacings.xsm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  transform: ${props => css`translateX(-${props.theme.spacings.xsm})`};
`;

export default Modal;
