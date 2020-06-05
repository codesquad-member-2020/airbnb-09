import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ({
  url,
  dispatch,
  actionType: { success, error },
  state = null,
  isValidRequest = true,
  dataSettingFn,
}) => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const getData = async () => {
    const { data } = await axios.get(url);
    console.log("[log] url:", url);
    console.log("[log] fetchingData:", data);
    try {
      dispatch(success(data));
      dataSettingFn(data);
    } catch (e) {
      dispatch(error());
      setErrorMsg(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!isValidRequest) return;
    getData();
  }, [state]);

  return { loading, errorMsg };
};

export default useFetch;
