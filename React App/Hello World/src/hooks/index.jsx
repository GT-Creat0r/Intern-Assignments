import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading]=useState(true);
  const [error,setError]=useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        return err;
      }
    };
    fetchData();
  }, [url]);
  return { data };
};

export default useFetch;
