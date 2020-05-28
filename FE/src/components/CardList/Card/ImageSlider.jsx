import React from "react";
import styled from "styled-components";

const ImageSlider = ({ thumbnails }) => {
  return (
    <ImageWrapper>
      {/* {thumbnails.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt="숙소 이미지" />
      ))} */}
      <Image src="/" />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 66.6667%;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${props => props.theme.colors.gray6};
  border-radius: ${props => props.theme.spacings.xxsm};
`;

export default ImageSlider;
