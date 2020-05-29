import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdAdd, MdRemove } from "react-icons/md";
import Text from "Styles/Text";
import Button from "Styles/Button";
import GuestButton from "./GuestButton";
import Modal from "./Modal";

const Guest = () => {
  const guestTypes = [
    {
      type: "adult",
      term: "성인",
      description: "만 13세 이상",
    },
    {
      type: "child",
      term: "어린이",
      description: "2~12세",
    },
    {
      type: "baby",
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
      {guestTypes.map(({ type, term, description }) => (
        <TypeListWrapper key={type}>
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

  const [isRender, setIsRender] = useState(true);

  useEffect(() => console.log(isRender), [isRender]);

  // ! clearHandler => 게스트 값 초기화하는 디스패치
  // ! saveHandler => 값 저장, fetch 요청 보내고 => 카드 업데이트 + 모달 닫는 기능
  // ! 저장 버튼, 모달 바깥을 눌렀을 때, 게스트 버튼 눌렀을 때

  const modalOption = {
    setIsRender: () => setIsRender(false),
    contents: modalContent,
    hasContents: false,
    clearHandler: null,
    saveHandler: null,
  };

  return (
    <GuestWrapper>
      <GuestButton clickHandler={() => setIsRender(!isRender)} />
      {isRender && <Modal options={modalOption} />}
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
