import { useEffect } from "react";
import axios from "axios";

const useFetch = ({ url, dispatch, actionType: { success, error } }) => {
  const getInitialData = async () => {
    const response = await axios.get(url);
    try {
      dispatch({ type: success, payload: response.data });
    } catch (e) {
      dispatch({ type: error });
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);
};

export default useFetch;
