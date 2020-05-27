import { useState, useEffect } from "react";
import axios from "axios";
import cardData from "../mock/list";

const useFetch = ({ url, dispatch, actionType: { success, error } }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const getInitialData = async () => {
    // const response = await axios.get(url);
    try {
      dispatch({ type: success, payload: cardData });
    } catch (e) {
      dispatch({ type: error });
      setErrorMsg(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return { loading, errorMsg };
};

export default useFetch;
