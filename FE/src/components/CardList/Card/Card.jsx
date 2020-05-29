import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Description from "./Description";
import ReservationButton from "./ReservationButton";

const Card = ({ data: { thumbnails, ...descData } }) => {
  return (
    <Wrapper>
      <ImageSlider thumbnails={thumbnails} />
      <Description data={descData} />
      {descData.oneNightRate && <ReservationButton />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacings.sm};
`;

export default Card;
