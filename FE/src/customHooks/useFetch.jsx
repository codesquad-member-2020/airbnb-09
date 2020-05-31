import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({ url, dispatch, actionType: { success, error } }) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const getData = async () => {
    const { data } = await axios.get(url);
    try {
      dispatch({ type: success, payload: data });
    } catch (e) {
      dispatch({ type: error });
      setErrorMsg(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, errorMsg };
};

export default useFetch;
