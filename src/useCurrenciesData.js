import { useState, useEffect } from "react";

export const useCurrenciesData = () => {
  const [currencies, setCurrencies] = useState({
    data: null,
    status: "loading",
  });

  useEffect(() => {
    const getApi = () => {
      const request = new XMLHttpRequest();

      const URL=`${process.env.REACT_APP_API_URL}`
      
      request.open("GET", URL );

      request.responseType = "json";

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          try {
            setCurrencies({ data: request.response, status: "success" });
          } catch (error) {
            console.error("There was an error", error);
          }
        } else {
          console.error("Requst failed with status", request.status);
          setCurrencies({ data: null, status: "error" });
        }
      };

      request.onerror = () => {
        setCurrencies({ data: null, status: "error" });
        console.error("Network error occured");
      };

      setTimeout(() => {
        request.send();
      }, 3000);
    };
    getApi();
  }, []);

  return [currencies];
};
