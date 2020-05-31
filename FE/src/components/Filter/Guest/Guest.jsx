import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { MdAdd, MdRemove } from "react-icons/md";
import { guestActions } from "Actions/actions";
import guestReducer from "Reducers/guestReducer";
import { guestInitialState } from "InitialStates/initialStates";
import Text from "Styles/Text";
import Button from "Styles/Button";
import FilterButton from "../FilterButton";
import Modal from "../Modal";

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

const smallerThanMinNum = (minNum, num) => minNum >= num;
const largerThanMaxNum = (maxNum, num) => maxNum <= num;

const getTotalNumOfValue = obj =>
  Object.values(obj).reduce((totalNum, curr) => {
    totalNum += curr;
    return totalNum;
  }, 0);

const renderGuestButtonText = state => {
  let numOfGuests = 0;
  let numOfInfants = 0;

  Object.entries(state).forEach(([type, num]) => {
    if (type !== "infants") numOfGuests += num;
    else numOfInfants += num;
  });

  if (numOfGuests <= 0) return `게스트`;
  return numOfInfants > 0 ? `게스트 ${numOfGuests}명, 유아 ${numOfInfants}명` : `게스트 ${numOfGuests}명`;
};

const Guest = () => {
  const [toggle, setToggle] = useState(false);
  const [guestNum, dispatch] = useReducer(guestReducer, guestInitialState);

  const decrementButtonHandler = type => {
    const isOnlyOneAdult = type === "adults" && guestNum[type] <= 1;
    const hasNotChildren = !guestNum.children && !guestNum.infants;

    if (isOnlyOneAdult) {
      if (hasNotChildren) {
        dispatch({ type: guestActions.CHANGE_GUEST(type), payload: -1 });
      }
    } else {
      dispatch({ type: guestActions.CHANGE_GUEST(type), payload: -1 });
    }
  };

  const incrementButtonHandler = type => {
    const isOnlyChildren = guestNum.adults === 0 && type !== "adults";

    dispatch({ type: guestActions.CHANGE_GUEST(type), payload: 1 });
    if (isOnlyChildren) {
      dispatch({ type: guestActions.CHANGE_ADULTS, payload: 1 });
    }
  };

  const resetButtonHandler = () => dispatch({ type: guestActions.RESET });
  const saveButtonHandler = () => {
    setToggle(false);
    // ! 요청 로직 추가
  };

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
    saveHandler: saveButtonHandler,
  };

  return (
    <GuestWrapper>
      <FilterButton clickHandler={() => setToggle(!toggle)} active={toggle} text={renderGuestButtonText(guestNum)} />
      {toggle && <Modal options={modalOption} />}
    </GuestWrapper>
  );
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

const GuestWrapper = styled.div`
  position: relative;
`;

export default Guest;
