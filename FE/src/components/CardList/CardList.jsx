import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import Title from "./Title";
import Card from "./Card/Card";
import cardData from "../../mock/list";

const initialState = {};

const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        data: {},
        error: "Something went wrong!",
      };
    default:
      return state;
  }
};

const CardList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, []);

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
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: ${props => props.theme.spacing.base};
  padding-bottom: ${props => props.theme.spacing.xxl};

  @media (min-width: ${props => props.theme.sizes.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${props => props.theme.sizes.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: ${props => props.theme.sizes.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export default CardList;
