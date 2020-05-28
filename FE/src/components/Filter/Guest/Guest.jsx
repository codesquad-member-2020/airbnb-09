import React from "react";
import styled from "styled-components";
import GuestButton from "./GuestButton";
import Modal from "./Modal";

const Guest = () => {
  return (
    <GuestWrapper>
      <GuestButton />
      <Modal />
    </GuestWrapper>
  );
};

const GuestWrapper = styled.div`
  position: relative;
`;

export default Guest;
