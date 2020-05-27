import React from "react";
import styled from "styled-components";

const ImageSlider = ({ thumbnails }) => {
  return (
    <div>
      {/* {thumbnails.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt="숙소 이미지" />
      ))} */}
      <Image src="/" />
    </div>
  );
};

const Image = styled.img`
  max-width: 100%;
  border-radius: ${props => props.theme.spacings.xxsm};
`;

export default ImageSlider;
