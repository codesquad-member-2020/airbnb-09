import React, { useContext } from "react";
import styled from "styled-components";
import { CardListContext } from "Contexts/cardListContext";
import { fetchSuccess, fetchError } from "Actions/fetchAction";
import useFetch from "CustomHooks/useFetch";
import Title from "./Title";
import Card from "./Card/Card";

const CardList = () => {
  const { cardList, cardListDispatch } = useContext(CardListContext);

  const { loading, errorMsg } = useFetch({
    url: `${process.env.API_KEY}`,
    dispatch: cardListDispatch,
    actionType: {
      success: fetchSuccess,
      error: fetchError,
    },
  });

  return (
    <Wrapper>
      <Title numberOfResults={cardList.length} />
      {loading ? <span>로딩중</span> : cardList.map(({ id, ...cardData }) => <Card key={id} data={cardData} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: ${({ theme }) => theme.spacings.base};
  padding-bottom: ${({ theme }) => theme.spacings.xxl};

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export default CardList;
