import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "Styles/Text";
import PropTypes from "prop-types";

const RangeInput = ({ inputRange, onChange }) => {
  const [defaultMin, defaultMax] = inputRange;
  const [rangeValue, setRangeValue] = useState(inputRange);

  const handleChange = e => {
    const thisValue = Number(e.target.value);
    const thisType = e.target.dataset && e.target.dataset.type;

    if (isNaN(thisValue)) return;

    if (thisType === "min") setRangeValue([thisValue, rangeValue[1]]);
    if (thisType === "max") setRangeValue([rangeValue[0], thisValue]);
  };

  const handleBlur = e => {
    const thisValue = Number(e.target.value);
    const thisType = e.target.dataset && e.target.dataset.type;
    let returnValue = rangeValue;

    if (isNaN(thisValue)) return;

    if (thisType === "min" && thisValue >= rangeValue[1]) returnValue = [defaultMin, rangeValue[1]];

    if (thisType === "max" && thisValue <= rangeValue[0]) returnValue = [rangeValue[0], defaultMax];

    onChange(returnValue); // callback data
    setRangeValue(returnValue); // set range value
  };

  useEffect(() => {
    setRangeValue(inputRange);
  }, [inputRange]);

  return (
    <StyledRangeInput>
      <InputWrapper>
        <Text fontSize="md" color="gray4">
          최저 요금
        </Text>
        <InputField type="tel" data-type="min" value={rangeValue[0]} onChange={handleChange} onBlur={handleBlur} />
      </InputWrapper>
      <Text fontSize="xl" color="gray4">
        -
      </Text>
      <InputWrapper>
        <Text fontSize="md" color="gray4">
          최고 요금
        </Text>
        <InputField type="tel" data-type="max" value={rangeValue[1]} onChange={handleChange} onBlur={handleBlur} />
      </InputWrapper>
    </StyledRangeInput>
  );
};

const StyledRangeInput = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 45%;
`;

const InputField = styled.input`
  border: 1.5px solid #ddd;
  border-radius: 3px;
  width: 100%;
  height: 50px;
  padding-left: 10px;
  padding-bottom: 5px;
`;

RangeInput.propTypes = {
  inputRange: PropTypes.array,
  onChange: PropTypes.func,
};

RangeInput.defaultProps = {
  inputRange: [],
  onChange: () => {},
};

export default RangeInput;
