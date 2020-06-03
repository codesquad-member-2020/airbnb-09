import React from "react";
import { IconContext } from "react-icons";
import { IoIosStar } from "react-icons/io";
import Text from "Styles/Text";

const Rating = ({ color = "#FF5A5F", ratingValue, fontSize = "sm" }) => {
  return (
    <>
      <IconContext.Provider value={{ color }}>
        <IoIosStar />
      </IconContext.Provider>
      <Text fontSize={fontSize}>{ratingValue}</Text>
    </>
  );
};

export default Rating;
