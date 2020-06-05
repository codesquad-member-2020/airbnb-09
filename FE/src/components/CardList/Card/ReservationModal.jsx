import React, { useContext } from "react";
import styled from "styled-components";
import Button from "Styles/Button";
import Text from "Styles/Text";
import { FilterContext } from "Contexts/filterContext";
import { SELLING_RATE_TEXT, RESERVATION_BUTTON_TEXT } from "Constants/constants";
import { addedWonUnitRate, renderGuestButtonText } from "Utils/utils";
import useCookie from "CustomHooks/useCookie";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";
import Rating from "./Rating";

const ReservationModal = ({
  data: {
    oneNightRate: { selling },
    nights,
    rating,
    price: { accomdationRate, cleaningFee, serviceFee, totalPrice },
  },
  clickHandler,
}) => {
  const {
    queries: { checkin, checkout, adults, children, infants },
  } = useContext(FilterContext);

  const isCookieExist = useCookie();
  const ALERT_MESSAGE = isCookieExist ? "숙소가 예약되었습니다." : "로그인해야 이용 가능합니다.";
  const NOTIFICATION_TEXT = "예약 확정 전에는 요금이 청구되지 않습니다";

  const reservationConfirmHandler = () => {
    alert(ALERT_MESSAGE);
    clickHandler();
  };

  const guestList = { adults, children, infants };

  const filterList = [
    {
      id: "date",
      type: "날짜",
      value: `${checkin} ~ ${checkout}`,
    },
    {
      id: "guest",
      type: "인원",
      value: renderGuestButtonText(guestList),
    },
  ];

  const priceList = [
    {
      id: "accomdationRate",
      type: `${addedWonUnitRate(selling)} x ${nights}박`,
      price: `${addedWonUnitRate(accomdationRate)}`,
    },
    {
      id: "cleaningFee",
      type: "청소비",
      price: `${addedWonUnitRate(cleaningFee)}`,
    },
    {
      id: "serviceFee",
      type: "서비스 수수료",
      price: `${addedWonUnitRate(serviceFee)}`,
    },
    {
      id: "totalPrice",
      type: "총합",
      price: `${addedWonUnitRate(totalPrice)}`,
    },
  ];

  return (
    <>
      <DimmedLayer onClick={clickHandler} />
      <ModalWrapper>
        <CloseButton circular highlighted onClick={clickHandler}>
          <IconContext.Provider value={{ size: "1.5rem" }}>
            <MdClose />
          </IconContext.Provider>
        </CloseButton>
        <PrimaryInfoWrapper>
          <PriceTextWrap>
            <SellingPriceText fontSize="xl" fontWeight="bold">
              {addedWonUnitRate(selling)}
            </SellingPriceText>
            <Text>{SELLING_RATE_TEXT}</Text>
          </PriceTextWrap>
          <Rating color="green" ratingValue={rating} />
        </PrimaryInfoWrapper>
        {filterList.map(({ id, type, value }) => {
          return (
            <div key={id}>
              <Text fontWeight="semiBold">{type}</Text>
              <InputWrapper>
                <Text>{value}</Text>
              </InputWrapper>
            </div>
          );
        })}
        <PriceListWrapper>
          {priceList.map(({ id, type, price }) => {
            return (
              <PriceWrapper key={id}>
                <Text>{type}</Text>
                <Text>{price}</Text>
              </PriceWrapper>
            );
          })}
        </PriceListWrapper>
        <ReservationButton primary onClick={reservationConfirmHandler}>
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

const CloseButton = styled(Button)`
  position: absolute;
  top: ${({ theme }) => theme.spacings.sm};
  right: ${({ theme }) => theme.spacings.sm};
`;

const PrimaryInfoWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  padding-bottom: ${({ theme }) => theme.spacings.sm};
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;

const ReservationButton = styled(Button)`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: ${({ theme }) => theme.spacings.sm} 0;
`;

const PriceTextWrap = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.xsm};
`;

const SellingPriceText = styled(Text)`
  margin-right: ${({ theme }) => theme.spacings.unit(0.5)};
`;

const NotificationWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacings.sm};
  text-align: center;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.xsm};
  margin-bottom: ${({ theme }) => theme.spacings.sm};
  padding: ${({ theme }) => theme.spacings.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray5};
  ${Text} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacings.sm} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray5};
  ${Text} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const PriceListWrapper = styled.div`
  padding-bottom: ${({ theme }) => theme.spacings.sm};
  ${PriceWrapper}:last-child {
    border-bottom: none;
    ${Text} {
      font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    }
  }
`;

const ModalWrapper = styled.div`
  ${({ theme }) => theme.aligns.center};
  z-index: 200;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.spacings.unit(120)};
  padding: ${({ theme }) => theme.spacings.lg};
  border-radius: ${({ theme }) => theme.spacings.xsm};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  background-color: ${({ theme }) => theme.colors.white};
`;

export default ReservationModal;
