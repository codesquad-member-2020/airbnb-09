import React from "react";

const ImageSlider = ({ thumbnails }) => {
  return (
    <div>
      {thumbnails.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt="숙소 이미지" />
      ))}
    </div>
  );
};

export default ImageSlider;
