import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Card from "./Card/Card";
import cardData from "../../mock/list";

const CardList = () => {
  return (
    <Wrapper>
      <Title numberOfResult={300} />
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: ${props => props.theme.spacing.base};
  padding-bottom: ${props => props.theme.spacing.xxl};
`;

export default CardList;
