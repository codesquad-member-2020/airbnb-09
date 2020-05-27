import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { CardListContext } from "Contexts/cardListContext";
import { fetchActions } from "Actions/actions";
import Title from "./Title";
import Card from "./Card/Card";
import cardData from "../../mock/list";

const CardList = () => {
  const { state, dispatch } = useContext(CardListContext);

  useEffect(() => {
    const getInitialData = async () => {
      const response = await axios.get("http://3.34.15.148/api/listing");
      try {
        dispatch({ type: fetchActions.FETCH_SUCCESS, payload: response.data });
      } catch (e) {
        dispatch({ type: fetchActions.FETCH_ERROR });
      }
    };

    getInitialData();
  }, []);

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
