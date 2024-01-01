import axios from "axios";

import { useState, useEffect } from "react";

export const useCurrenciesData = () => {
  const [currencies, setCurrencies] = useState({
    data: null,
    status: "loading",
  });

  useEffect(() => {
    const getApi = (url) => {
      axios
        .get(url)
        .then((response) => {
          setCurrencies({ data: response.data, status: "success" });
        })
        .catch((error) => {
          console.error(error);
          setCurrencies({ data: null, status: "error" });
        });
    };

    const timer = setTimeout(() => {
      getApi(`${process.env.REACT_APP_API_URL}`);
    }, 3000);

    clearTimeout(timer);
  }, []);

  return [currencies];
};
