import React from "react";
import styled, { css } from "styled-components";
import Button from "Styles/Button";

const Modal = () => {
  const SAVE_BUTTON_TEXT = "저장";
  const CLEAR_BUTTON_TEXT = "지우기";

  return (
    <ModalWrapper>
      <ContentsWrapper>
        <div />
      </ContentsWrapper>
      <ButtonsWrapper>
        <Buttons>
          <ClearButton highlighted underlined>
            {CLEAR_BUTTON_TEXT}
          </ClearButton>
          <Button secondary>{SAVE_BUTTON_TEXT}</Button>
        </Buttons>
      </ButtonsWrapper>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  width: 400px;
  z-index: 10;
  position: absolute;
  top: ${props => props.theme.spacings.xl};
  box-shadow: ${props => props.theme.shadows.xl};
  background-color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray5};
  border-radius: ${props => props.theme.spacings.unit(3)};
`;

const ContentsWrapper = styled.div`
  padding: ${props => props.theme.spacings.base};
  overflow-x: hidden;
  overflow-y: auto;
`;

const ButtonsWrapper = styled.div`
  padding: ${props => props.theme.spacings.sm};
  border-top: 1px solid ${props => props.theme.colors.gray5};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearButton = styled(Button)`
  padding: ${props => props.theme.spacings.xsm};
  font-size: ${props => props.theme.fontSizes.md};
  transform: ${props => css`translateX(-${props.theme.spacings.xsm})`};
`;

export default Modal;
