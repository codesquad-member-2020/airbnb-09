import React from "react";
import ImageSlider from "./ImageSlider";
import Description from "./Description";
import ReservationButton from "./ReservationButton";

const Card = ({ name, country, rating, superHost, thumbnails, originalRate, sellingRate }) => {
  return (
    <div>
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
    </div>
  );
};

export default Card;
