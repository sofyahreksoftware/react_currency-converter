import Container from "./Container";
import Form from "./Form";
import React, { useState } from "react";
import { rates } from "./rates.js";
import Result from "./Result";

function App() {
  const [result, setResult] = useState("");

  const [moneyAmount, setMoneyAmount] = useState("");

  const [convertFromCurrency, setConvertFromCurrency] = useState("usd");

  const [convertToCurrency, setConvertToCurrency] = useState("eur");

  const [resultData, setResultData] = useState({
    moneyAmount,
    convertFromCurrency,
    result,
    convertToCurrency,
  });

  const calculateResult = (
    moneyAmount,
    convertFromCurrency,
    convertToCurrency
  ) => {
    let exchangeRate;

    switch (convertFromCurrency) {
      case "usd":
        switch (convertToCurrency) {
          case "eur":
            exchangeRate = rates.find((rate) => rate.currency === "EUR").in1USD;
            return moneyAmount * exchangeRate;

          case "pln":
            exchangeRate = rates.find((rate) => rate.currency === "PLN").in1USD;
            return moneyAmount * exchangeRate;

          case "chf":
            exchangeRate = rates.find((rate) => rate.currency === "CHF").in1USD;
            return moneyAmount * exchangeRate;

          case "rub":
            exchangeRate = rates.find((rate) => rate.currency === "RUB").in1USD;
            return moneyAmount * exchangeRate;

          case "usd":
            return +moneyAmount;
        }
        break;
      case "eur":
        switch (convertToCurrency) {
          case "usd":
            exchangeRate = rates.find((rate) => rate.currency === "USD").in1EUR;
            return moneyAmount * exchangeRate;

          case "pln":
            exchangeRate = rates.find((rate) => rate.currency === "PLN").in1EUR;
            return moneyAmount * exchangeRate;

          case "chf":
            exchangeRate = rates.find((rate) => rate.currency === "CHF").in1EUR;
            return moneyAmount * exchangeRate;

          case "rub":
            exchangeRate = rates.find((rate) => rate.currency === "RUB").in1EUR;
            return moneyAmount * exchangeRate;

          case "eur":
            return +moneyAmount;
        }
        break;
      case "pln":
        switch (convertToCurrency) {
          case "usd":
            exchangeRate = rates.find((rate) => rate.currency === "USD").in1PLN;
            return moneyAmount * exchangeRate;

          case "eur":
            exchangeRate = rates.find((rate) => rate.currency === "EUR").in1PLN;
            return moneyAmount * exchangeRate;

          case "chf":
            exchangeRate = rates.find((rate) => rate.currency === "CHF").in1PLN;
            return moneyAmount * exchangeRate;

          case "rub":
            exchangeRate = rates.find((rate) => rate.currency === "RUB").in1PLN;
            return moneyAmount * exchangeRate;

          case "pln":
            return +moneyAmount;
        }
        break;
      case "chf":
        switch (convertToCurrency) {
          case "usd":
            exchangeRate = rates.find((rate) => rate.currency === "USD").in1CHF;
            return moneyAmount * exchangeRate;

          case "eur":
            exchangeRate = rates.find((rate) => rate.currency === "EUR").in1CHF;
            return moneyAmount * exchangeRate;

          case "pln":
            exchangeRate = rates.find((rate) => rate.currency === "PLN").in1CHF;
            return moneyAmount * exchangeRate;

          case "rub":
            exchangeRate = rates.find((rate) => rate.currency === "RUB").in1CHF;
            return moneyAmount * exchangeRate;

          case "chf":
            return +moneyAmount;
        }
        break;
      case "rub":
        switch (convertToCurrency) {
          case "usd":
            exchangeRate = rates.find((rate) => rate.currency === "USD").in1CHF;
            return moneyAmount * exchangeRate;

          case "eur":
            exchangeRate = rates.find((rate) => rate.currency === "EUR").in1CHF;
            return moneyAmount * exchangeRate;

          case "pln":
            exchangeRate = rates.find((rate) => rate.currency === "PLN").in1CHF;
            return moneyAmount * exchangeRate;

          case "chf":
            exchangeRate = rates.find((rate) => rate.currency === "CHF").in1CHF;
            return moneyAmount * exchangeRate;

          case "rub":
            return +moneyAmount;
        }
        break;
    }
  };
  return (
    <Container>
      <Form
        moneyAmount={moneyAmount}
        setMoneyAmount={setMoneyAmount}
        convertFromCurrency={convertFromCurrency}
        setConvertFromCurrency={setConvertFromCurrency}
        convertToCurrency={convertToCurrency}
        setConvertToCurrency={setConvertToCurrency}
        calculateResult={calculateResult}
        setResult={setResult}
        setResultData={setResultData}
      />
      <Result resultData={resultData} />
    </Container>
  );
}

export default App;
