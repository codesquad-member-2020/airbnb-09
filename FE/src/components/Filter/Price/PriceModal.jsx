import React from "react";
import styled from "styled-components";
import Modal from "../Modal";

const PriceModal = ({ setToggle }) => {
  const modalContent = <div>요금 콘텐츠</div>;

  const modalOption = {
    contents: modalContent,
    hasContents: null,
    clearHandler: null,
    toggleHandler: setToggle,
  };

  return <Modal options={modalOption} />;
};

export default PriceModal;
