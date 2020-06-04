import React from "react";
import styled from "styled-components";
import Button from "Styles/Button";
import Text from "Styles/Text";

const ReservationModal = ({ data, clickHandler }) => {
  const RESERVATION_BUTTON_TEXT = "예약하기";
  const NOTIFICATION_TEXT = "예약 확정 전에는 요금이 청구되지 않습니다";

  return (
    <>
      <DimmedLayer onClick={clickHandler} />
      <ModalWrapper>
        <Text>날짜</Text>
        <div />
        <Text>인원</Text>
        <div />
        <div>
          <Text>무슨무슨돈</Text>
          <Text>얼마얼마얼마</Text>
        </div>
        <ReservationButton primary onClick={clickHandler}>
          {RESERVATION_BUTTON_TEXT}
        </ReservationButton>
        <NotificationWrapper>
          <Text fontWeight="semiBold">{NOTIFICATION_TEXT}</Text>
        </NotificationWrapper>
      </ModalWrapper>
    </>
  );
};

const DimmedLayer = styled.div`
  z-index: 150;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
`;

const ReservationButton = styled(Button)`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: ${({ theme }) => theme.spacings.sm} 0;
`;

const NotificationWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacings.sm};
  text-align: center;
`;

const ModalWrapper = styled.div`
  ${({ theme }) => theme.aligns.center};
  z-index: 200;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.spacings.unit(150)};
  padding: ${({ theme }) => theme.spacings.lg};
  border-radius: ${({ theme }) => theme.spacings.xsm};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  background-color: ${({ theme }) => theme.colors.white};
`;

export default ReservationModal;
