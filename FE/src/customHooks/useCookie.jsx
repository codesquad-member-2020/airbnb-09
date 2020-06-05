import { useState, useEffect } from "react";

const useCookie = () => {
  const [isCookieExist, setIsCookieExist] = useState(false);

  useEffect(() => {
    if (document.cookie) setIsCookieExist(true);
  }, [document.cookie]);

  return isCookieExist;
};

export default useCookie;
