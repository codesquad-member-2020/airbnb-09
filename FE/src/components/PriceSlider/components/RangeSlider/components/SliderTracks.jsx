import React from "react";
import styled from "styled-components";

const SliderRail = ({ source, target, getTrackProps }) => {
  const left = `${source.percent}%`;
  const width = `${target.percent - source.percent}%`;

  return (
    <>
      <StyledTrack left={left} width={width} />
      <StyledTrackHotSpot left={left} width={width} {...getTrackProps()} />
    </>
  );
};

const trackHeight = 3;
const thumbHeight = 25;

const StyledTrack = styled.div`
  background-color: #b0b0b0;
  height: ${`${trackHeight}px`};
  position: absolute;
  z-index: 1;
  pointer-events: none;
  left: ${props => props.left};
  width: ${props => props.width};
`;
const StyledTrackHotSpot = styled.div`
  height: ${thumbHeight}px;
  top: ${`${thumbHeight * -0.5}px`};
  position: absolute;
  cursor: pointer;
  left: ${props => props.left};
  width: ${props => props.width};
`;

export default SliderRail;
