import React, { useState } from "react";
import styled from "styled-components";
import RangeSlider from "./components/RangeSlider";
import Histogram from "./components/Histogram";
import RangeInput from "./components/RangeInput";

const prices = {
  average: 132976.97,
  minPrice: 17000,
  maxPrice: 3000000,
  priceGap: 10000,
  countList: [120, 50, 225, 47, 4, 80, 14, 0, 10],
};

const getFirstTo = (minPrice, priceGap) => {
  let firstTo = priceGap;
  while (minPrice > firstTo) {
    firstTo += priceGap;
  }
  return firstTo;
};

const generateFormattedPrices = ({ average, minPrice, maxPrice, priceGap, countList }) => {
  const initialRange = {
    key: `0-${minPrice - minPrice + priceGap}`,
    from: minPrice,
    to: getFirstTo(minPrice, priceGap),
    count: countList[0],
  };

  const range = countList.slice(1, countList.length - 1).reduce(
    (acc, curr, i) => {
      acc.push({
        key: `${acc[i].to}-${acc[i].to + priceGap}`,
        from: acc[i].to,
        to: acc[i].to + priceGap,
        count: curr,
      });
      return acc;
    },
    [initialRange],
  );

  return {
    average,
    min: minPrice,
    max: maxPrice,
    range,
  };
};

const sample = generateFormattedPrices(prices);

const PriceSlider = () => {
  const responseData = sample.range;
  const maxData = sample.max;
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
