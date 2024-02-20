import axios from "axios";

import { useState, useEffect } from "react";

export const useCurrenciesApi = () => {
  const [currencies, setCurrencies] = useState({
    data: null,
    status: "loading",
  });

  useEffect(() => {
    const getApi = async (url) => {
      try {
        const response = await axios.get(url);
        setCurrencies({ data: response.data, status: "success" });
      } catch (error) {
        console.error(error);
        setCurrencies({ data: null, status: "error" });
      }
    };

    setTimeout(() => {
      getApi(`${process.env.REACT_APP_API_URL}`);
    }, 3000);
  }, []);

  return [currencies];
};
