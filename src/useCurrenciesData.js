import { useState, useEffect } from "react";

export const useCurrenciesData = () => {
  const [currencies, setCurrencies] = useState({
    data: null,
    status: "loading",
  });

  const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  };

  useEffect(() => {
    const getApi = async () => {
      try {
        const ratesData = await fetchData(`${process.env.REACT_APP_API_URL}`);
        setCurrencies({ data: ratesData, status: "success" });
      } catch (error) {
        setCurrencies({ data: null, status: "error" });
      }
    };

    const timer = setTimeout(() => {
      getApi();
    }, 3000);

    clearTimeout(timer);
  }, []);

  return [currencies];
};
