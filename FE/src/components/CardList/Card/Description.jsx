import React from "react";

const Description = ({ name, country, rating, superHost, originalRate, sellingRate }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{country}</span>
      {superHost && <div>슈퍼호스트</div>}
      <span>{rating}</span>
      <span>{originalRate}</span>
      <span>{sellingRate}</span>
    </div>
  );
};

export default Description;
