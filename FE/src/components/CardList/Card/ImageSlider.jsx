import React from "react";
import styled from "styled-components";

const ImageSlider = ({ thumbnails }) => {
  return (
    <ImageWrapper>
      <Image src={thumbnails[0]} alt="숙소 이미지" />
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
  background-color: ${({ theme }) => theme.colors.gray6};
  border-radius: ${({ theme }) => theme.spacings.xxsm};
`;

export default ImageSlider;
