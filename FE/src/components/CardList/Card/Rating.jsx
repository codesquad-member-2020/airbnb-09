import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import Text from "Styles/Text";
import theme from "Styles/theme";

const Rating = ({ color = "pink", ratingValue = 0, fontSize = "sm" }) => {
  return (
    <RatingWrapper>
      <IconContext.Provider value={{ color: theme.colors[color] }}>
        <IoIosStar />
      </IconContext.Provider>
      <Text fontSize={fontSize}>{ratingValue}</Text>
    </RatingWrapper>
  );
};

const RatingWrapper = styled.div`
  display: flex;
  align-content: center;
  ${Text} {
    margin-left: 2px;
  }
`;

export default Rating;
