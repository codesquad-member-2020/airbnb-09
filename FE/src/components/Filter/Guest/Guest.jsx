import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { MdAdd, MdRemove } from "react-icons/md";
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

const initialState = {
  adults: 0,
  children: 0,
  infants: 0,
};

const actions = {
  CHANGE_GUEST: type => `CHANGE_${type.toUpperCase()}`,
  CHANGE_ADULTS: "CHANGE_ADULTS",
  CHANGE_CHILDREN: "CHANGE_CHILDREN",
  CHANGE_INFANTS: "CHANGE_INFANTS",
  RESET: "RESET",
};

const reducer = (state, action) => {
  const { CHANGE_ADULTS, CHANGE_CHILDREN, CHANGE_INFANTS, RESET } = actions;
  const { adults, children, infants } = state;
  const { type, payload } = action;

  switch (type) {
    case CHANGE_ADULTS:
      return { ...state, adults: adults + payload };
    case CHANGE_CHILDREN:
      return { ...state, children: children + payload };
    case CHANGE_INFANTS:
      return { ...state, infants: infants + payload };
    case RESET:
      return { ...state, ...initialState };
    default:
      return state;
  }
};

const renderGuestButtonText = guestNum => {
  let numOfGuests = 0;
  let numOfInfants = 0;

  for (const [type, num] of Object.entries(guestNum)) {
    if (type !== "infants") numOfGuests += num;
    else numOfInfants += num;
  }

  if (numOfGuests <= 0) return `게스트`;
  return numOfInfants > 0 ? `게스트 ${numOfGuests}명, 유아 ${numOfInfants}명` : `게스트 ${numOfGuests}명`;
};

const Guest = () => {
  const [guestNum, dispatch] = useReducer(reducer, initialState);

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
              disabled={minNum >= guestNum[type]}
              onClick={() => dispatch({ type: actions.CHANGE_GUEST(type), payload: -1 })}
            >
              <MdRemove />
            </Button>
            <GuestNumberText fontSize="lg">{guestNum[type]}</GuestNumberText>
            <Button
              circular
              bordered
              disabled={maxNum <= guestNum[type]}
              onClick={() => dispatch({ type: actions.CHANGE_GUEST(type), payload: 1 })}
            >
              <MdAdd />
            </Button>
          </ButtonsWrapper>
        </TypeListWrapper>
      ))}
    </ContentsWrapper>
  );

  const [toggle, setToggle] = useState(false);

  // ! saveHandler => 값 저장, fetch 요청 보내고 => 카드 업데이트 + 모달 닫는 기능
  // ! 저장 버튼, 모달 바깥을 눌렀을 때, 게스트 버튼 눌렀을 때

  const getTotalNumOfGuests = () =>
    Object.values(guestNum).reduce((total, curr) => {
      total += curr;
      return total;
    }, 0);

  const modalOption = {
    setToggle: () => setToggle(false),
    contents: modalContent,
    hasContents: getTotalNumOfGuests(),
    clearHandler: () => dispatch({ type: actions.RESET }),
    saveHandler: null,
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
  padding: ${props => props.theme.spacings.xsm} 0;

  ${TypeListWrapper} + ${TypeListWrapper} {
    padding-top: ${props => props.theme.spacings.lg};
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
  width: ${props => props.theme.spacings.sm};
  margin: 0 ${props => props.theme.spacings.sm};
`;

const GuestWrapper = styled.div`
  position: relative;
`;

export default Guest;
