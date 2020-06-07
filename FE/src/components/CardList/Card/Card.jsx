import React, { useState } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Description from "./Description";
import ReservationButton from "./ReservationButton";
import ReservationModal from "./ReservationModal";

const Card = ({ data: { thumbnails, ...descData } }) => {
  const [toggle, setToggle] = useState(false);
  const isRateDataExist = !!descData.oneNightRate;
  const toggleHandler = () => setToggle(!toggle);

  return (
    <Wrapper>
      <ImageSlider thumbnails={thumbnails} />
      <Description data={descData} />
      {isRateDataExist && <ReservationButton clickHandler={toggleHandler} />}
      {toggle && <ReservationModal data={descData} clickHandler={toggleHandler} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;

export default Card;
