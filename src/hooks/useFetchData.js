import { useEffect, useState } from "react";
import httpClient from "../services/httpclient";

const useFetchData = (endpoint) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
          const response = await httpClient.get(endpoint);
          const { results } = response.data;
          setData(results);
          console.log(results);
      } catch ({ message }) {
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [endpoint]);

  return { loading, error, data };
};
export default useFetchData;
