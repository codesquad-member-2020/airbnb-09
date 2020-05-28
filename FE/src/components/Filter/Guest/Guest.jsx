import React from "react";
import styled from "styled-components";
import { MdAdd, MdRemove } from "react-icons/md";
import Text from "Styles/Text";
import Button from "Styles/Button";
import GuestButton from "./GuestButton";
import Modal from "./Modal";

const Guest = () => {
  const guestTypes = [
    {
      id: 1,
      term: "성인",
      description: "만 13세 이상",
    },
    {
      id: 2,
      term: "어린이",
      description: "2~12세",
    },
    {
      id: 3,
      term: "유아",
      description: "2세 미만",
    },
  ];

  const MIN_GUEST_NUM = 0;
  const MAX_GUEST_NUM = 8;

  // ! 성인, 어린이, 아이 상태에 해당하는 수 로 이후 변경해야 함
  const GUEST_NUM_TEST = 0;

  const modalContent = (
    <ContentsWrapper>
      {guestTypes.map(({ id, term, description }) => (
        <TypeListWrapper key={id}>
          <TextWrapper>
            <Text fontSize="lg">{term}</Text>
            <Text color="gray3">{description}</Text>
          </TextWrapper>
          <ButtonsWrapper>
            <Button circular bordered disabled={GUEST_NUM_TEST <= MIN_GUEST_NUM}>
              <MdRemove />
            </Button>
            <GuestNumberText fontSize="lg">{GUEST_NUM_TEST}</GuestNumberText>
            <Button circular bordered disabled={GUEST_NUM_TEST >= MAX_GUEST_NUM}>
              <MdAdd />
            </Button>
          </ButtonsWrapper>
        </TypeListWrapper>
      ))}
    </ContentsWrapper>
  );

  const modalOption = {
    contents: modalContent,
    hasContents: false,
    clearHandler: null,
    saveHandler: null,
  };

  return (
    <GuestWrapper>
      <GuestButton />
      <Modal options={modalOption} />
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
  margin: 0 ${props => props.theme.spacings.sm};
`;

const GuestWrapper = styled.div`
  position: relative;
`;

export default Guest;
