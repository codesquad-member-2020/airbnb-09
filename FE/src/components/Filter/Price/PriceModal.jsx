import React from "react";
import styled from "styled-components";
import { setPrice, setPositions, resetPrice } from "Actions/priceAction";
import { Histogram, RangeSlider, RangeInput } from "Components/PriceSlider/index";
import Text from "Styles/Text";
import Modal from "../Modal";

const PriceModal = ({ setToggle, isDateSelected, priceInfo, dispatch, initialPrice }) => {
  const NO_DATE_MESSAGE = "체크인/체크아웃 날짜를 선택하면\n 요금을 확인할 수 있습니다.";

  const responseData = priceInfo.range;
  const maxData = priceInfo.max;
  const countData = [];
  const priceData = [];

  for (let i = 0; i < responseData.length; i += 1) {
    const thisPrice = responseData[i].from;
    const thisCount = responseData[i].count;
    countData.push(thisCount);
    priceData.push(thisPrice);
  }
  countData[countData.length] = countData[countData.length - 1];
  priceData[priceData.length] = maxData;

  const range = [0, countData.length - 1];
  const domain = range;

  const onUpdateCallBack = v => {
    dispatch(setPrice([].concat(Number(priceData[v[0]]), Number(priceData[v[1]]))));
    dispatch(setPositions(v));
  };
  const onChangeCallBack = v => {
    dispatch(setPrice([].concat(Number(priceData[v[0]]), Number(priceData[v[1]]))));
    dispatch(setPositions(v));
  };

  const handleInputChange = v => {
    const updateAry = domain;
    for (let i = 0; i < priceData.length; i += 1) {
      if (Number(priceData[i]) > v[0]) {
        updateAry[0] = i - 1;
        break;
      }
    }
    for (let i = 0; i < priceData.length; i += 1) {
      if (Number(priceData[i]) > v[1]) {
        updateAry[1] = i;
        break;
      } else {
        updateAry[1] = priceData.length;
      }
    }
    dispatch(setPositions(v));
  };

  const resetFn = () => {
    dispatch(resetPrice([initialPrice.min, initialPrice.max, range]));
  };

  const modalContent = isDateSelected ? (
    <DIV>
      <Histogram data={countData} highlight={priceInfo.pos} domain={domain} />
      <RangeSlider
        values={priceInfo.pos}
        mode={2}
        step={1}
        domain={domain}
        onChange={onChangeCallBack}
        onUpdate={onUpdateCallBack}
      />
      <SPACE />
      <RangeInput inputRange={[priceInfo.min, priceInfo.max]} onChange={handleInputChange} />
    </DIV>
  ) : (
    NO_DATE_MESSAGE.split("\n").map(chunk => (
      <Text key={chunk} fontSize="md">
        {chunk}
      </Text>
    ))
  );

  const modalOption = {
    contents: modalContent,
    hasContents: true,
    clearHandler: resetFn,
    toggleHandler: setToggle,
    withButtons: isDateSelected,
  };

  return <Modal options={modalOption} />;
};

const DIV = styled.div`
  padding: 15px;
  canvas {
    height: 250px !important;
  }
`;

const SPACE = styled.div`
  height: 50px;
`;
export default PriceModal;
