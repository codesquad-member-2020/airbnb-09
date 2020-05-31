import React, { useRef, useEffect } from "react";

const useOutsideClick = (ref, clickHandler) => {
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) clickHandler();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
};

const OutsideClicker = ({ children, clickHandler }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, clickHandler);
  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClicker;
