import React, { useState } from "react";
import styled from "styled-components";
import RangeSlider from "./components/RangeSlider";
import Histogram from "./components/Histogram";
import RangeInput from "./components/RangeInput";

const PriceSlider = ({ data }) => {
  const responseData = data.range;
  const maxData = data.max;
  const countData = [];
  const priceData = [];

  for (let i = 0; i < responseData.length; i += 1) {
    const thisPrice = responseData[i].from ? responseData[i].from : 0;
    const thisCount = responseData[i].count;
    countData.push(thisCount || 0);
    priceData.push(thisPrice || 0);
  }
  countData[countData.length] = countData[countData.length - 1];
  priceData[priceData.length] = maxData;

  const range = [0, countData.length - 1];
  const domain = range;
  const defaultInputValue = [Number(priceData[0]), Number(priceData[priceData.length - 1])];
  const [updateValue, setUpdateValue] = useState(domain);
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const onUpdateCallBack = v => {
    setUpdateValue(v);
    setInputValue([].concat(Number(priceData[v[0]]), Number(priceData[v[1]])));
  };
  const onChangeCallBack = v => {
    setUpdateValue(v);
    setInputValue([].concat(Number(priceData[v[0]]), Number(priceData[v[1]])));
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
    setUpdateValue([].concat(updateAry));
  };

  const resetFn = () => {
    setUpdateValue(domain);
    setInputValue(defaultInputValue);
  };

  return (
    <DIV>
      <Histogram data={countData} highlight={updateValue} domain={domain} />
      <RangeSlider
        values={updateValue}
        mode={2}
        step={1}
        domain={domain}
        onChange={onChangeCallBack}
        onUpdate={onUpdateCallBack}
      />
      <SPACE />
      <RangeInput inputRange={inputValue} onChange={handleInputChange} />
      <button onClick={resetFn}>Reset</button>
    </DIV>
  );
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

export default PriceSlider;
