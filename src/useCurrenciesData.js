import { useState, useEffect } from "react";

export const useCurrenciesData = () => {
  const [currencies, setCurrencies] = useState({
    data: null,
    status: "loading",
  });

  useEffect(() => {
    const getApi = () => {
      setTimeout(() => {
        fetch(`${process.env.REACT_APP_API_URL}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response;
          })
          .then((response) => response.json())
          .then((data) => {
            setCurrencies({ data: data, status: "success" });
            localStorage.setItem("myData", JSON.stringify(data));
          })
          .catch((error) => {
            console.error("Error", error);
            setCurrencies({ data: null, status: "error" });
          });
      }, 3000);
    };
    getApi();
  }, []);

  return [currencies];
};
