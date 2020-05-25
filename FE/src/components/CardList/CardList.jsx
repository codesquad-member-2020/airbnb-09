import React from "react";
import Title from "./Title";
import Card from "./Card/Card";
import cardData from "../../mock/list";

const CardList = () => {
  return (
    <div>
      <Title />
      {cardData.map(({ id, name, country, rating, superHost, thumbnails, oneNightRate }) => (
        <Card
          key={id}
          name={name}
          country={country}
          rating={rating}
          superHost={superHost}
          thumbnails={thumbnails}
          originalRate={oneNightRate.original}
          sellingRate={oneNightRate.selling}
        />
      ))}
      CardList
    </div>
  );
};

export default CardList;
