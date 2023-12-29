import { useState, useEffect } from "react";

export const useCurrenciesData = () => {
  const [currencies, setCurrencies] = useState({
    data: null,
    status: "loading",
  });

  useEffect(() => {
    const makeRequest = (URL) => {
      return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open("GET", URL);
        request.responseType = "json";

        request.onload = () => {
          if (request.status >= 200 && request.status < 300) {
            setTimeout(() => {
              resolve(request.response);
            }, 3000);
          } else {
            reject(new Error("Request failed with status: " + request.status));
          }
        };

        request.onerror = () => {
          reject(new Error("Network error occurred"));
        };

        request.send();
      });
    };

    const fetchData = async () => {
      try {
        let data = await makeRequest(process.env.REACT_APP_API_URL);
        setCurrencies({ data: data, status: "success" });
      } catch (error) {
        console.error(error);
        setCurrencies({ data: null, status: "error" });
      }
    };

    fetchData();
  }, []);

  return [currencies];
};
