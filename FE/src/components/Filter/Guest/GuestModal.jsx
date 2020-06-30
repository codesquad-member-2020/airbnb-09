import React from "react";
import styled from "styled-components";
import { MdAdd, MdRemove } from "react-icons/md";
import { changeGuest, changeAdults, resetGuest } from "Actions/guestAction";
import { smallerThanMinNum, largerThanMaxNum, getTotalNumOfValue } from "Utils/utils";
import Text from "Styles/Text";
import Button from "Styles/Button";
import Modal from "../Modal";

const GuestModal = ({ setToggle, guestNum, dispatch }) => {
  const incrementButtonHandler = type => {
    const isOnlyChildren = guestNum.adults === 0 && type !== "adults";

    dispatch(changeGuest(type, 1));
    if (isOnlyChildren) {
      dispatch(changeAdults(1));
    }
  };

  const decrementButtonHandler = type => {
    const isOnlyOneAdult = type === "adults" && guestNum[type] <= 1;
    const hasNotChildren = !guestNum.children && !guestNum.infants;

    if (isOnlyOneAdult) {
      if (hasNotChildren) {
        dispatch(changeGuest(type, -1));
      }
    } else {
      dispatch(changeGuest(type, -1));
    }
  };

  const resetButtonHandler = () => dispatch(resetGuest());

  const guestTypes = [
    {
      type: "adults",
      term: "성인",
      description: "만 13세 이상",
      minNum: 0,
      maxNum: 8,
    },
    {
      type: "children",
      term: "어린이",
      description: "2~12세",
      minNum: 0,
      maxNum: 8,
    },
    {
      type: "infants",
      term: "유아",
      description: "2세 미만",
      minNum: 0,
      maxNum: 8,
    },
  ];

  const modalContent = (
    <ContentsWrapper>
      {guestTypes.map(({ type, term, description, minNum, maxNum }) => (
        <TypeListWrapper key={type}>
          <TextWrapper>
            <Text fontSize="lg">{term}</Text>
            <Text color="gray3">{description}</Text>
          </TextWrapper>
          <ButtonsWrapper>
            <Button
              circular
              bordered
              disabled={smallerThanMinNum(minNum, guestNum[type])}
              onClick={() => decrementButtonHandler(type)}
            >
              <MdRemove />
            </Button>
            <GuestNumberText fontSize="lg">{guestNum[type]}</GuestNumberText>
            <Button
              circular
              bordered
              disabled={largerThanMaxNum(maxNum, guestNum[type])}
              onClick={() => incrementButtonHandler(type)}
            >
              <MdAdd />
            </Button>
          </ButtonsWrapper>
        </TypeListWrapper>
      ))}
    </ContentsWrapper>
  );

  const modalOption = {
    contents: modalContent,
    hasContents: getTotalNumOfValue(guestNum),
    clearHandler: resetButtonHandler,
    toggleHandler: setToggle,
  };

  return <Modal options={modalOption} />;
};

const TypeListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContentsWrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.xsm} 0;

  ${TypeListWrapper} + ${TypeListWrapper} {
    padding-top: ${({ theme }) => theme.spacings.lg};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GuestNumberText = styled(Text)`
  display: inline-block;
  text-align: center;
  width: ${({ theme }) => theme.spacings.sm};
  margin: 0 ${({ theme }) => theme.spacings.sm};
`;

export default GuestModal;
