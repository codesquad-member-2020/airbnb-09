import React from "react";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import Text from "Styles/Text";
import theme from "Styles/theme";

const Rating = ({ color = "pink", ratingValue, fontSize = "sm" }) => {
  return (
    <>
      <IconContext.Provider value={{ color: theme.colors[color] }}>
        <IoIosStar />
      </IconContext.Provider>
      <Text fontSize={fontSize}>{ratingValue}</Text>
    </>
  );
};

export default Rating;
