import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Description from "./Description";
import ReservationButton from "./ReservationButton";

const Card = ({ name, country, rating, superHost, thumbnails, originalRate, sellingRate }) => {
  return (
    <Wrapper>
      <ImageSlider thumbnails={thumbnails} />
      <Description
        name={name}
        country={country}
        rating={rating}
        superHost={superHost}
        originalRate={originalRate}
        sellingRate={sellingRate}
      />
      <ReservationButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export default Card;
