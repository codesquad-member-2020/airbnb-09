import React from "react";
import Text from "Styles/Text";
import PriceSlider from "Components/PriceSlider/PriceSlider";
import Modal from "../Modal";

const PriceModal = ({ setToggle, isDateSelected }) => {
  const NO_DATE_MESSAGE = "체크인/체크아웃 날짜를 선택하면\n 요금을 확인할 수 있습니다.";

  const modalContent = isDateSelected ? (
    <PriceSlider />
  ) : (
    NO_DATE_MESSAGE.split("\n").map(chunk => (
      <Text key={chunk} fontSize="md">
        {chunk}
      </Text>
    ))
  );

  const modalOption = {
    contents: modalContent,
    hasContents: null,
    clearHandler: null,
    toggleHandler: setToggle,
    withButtons: isDateSelected,
  };

  return <Modal options={modalOption} />;
};

export default PriceModal;
