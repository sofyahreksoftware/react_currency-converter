import { useState, useEffect } from "react";

export const useCurrenciesData = () => {
  const [currencies, setCurrencies] = useState({
    data: null,
    status: "loading",
  });

  useEffect(() => {
    const getApi = () => {
      // fetch(`${process.env.REACT_APP_API_URL}`)
      fetch(
        "https://sofyahreksoftware.github.io/react_currency-converter/currencyApi.json"
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCurrencies({ data: data, status: "success" });
          localStorage.setItem("myData", JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);
          setCurrencies({ data: null, status: "error" });
        });
    };
    getApi();
  }, []);

  return [currencies];
};
