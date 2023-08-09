import Container from "./Container";
import Form from "./Form";
import React, { useState } from "react";
import { currencies } from "./currencies.js";
import Result from "./Result";
import Footer from "./Footer";
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
    let exchangecurrency;

    switch (convertFromCurrency) {
      case "usd":
        switch (convertToCurrency) {
          case "eur":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "EUR"
            ).in1USD;
            return moneyAmount * exchangecurrency;

          case "pln":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "PLN"
            ).in1USD;
            return moneyAmount * exchangecurrency;

          case "chf":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "CHF"
            ).in1USD;
            return moneyAmount * exchangecurrency;

          case "rub":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "RUB"
            ).in1USD;
            return moneyAmount * exchangecurrency;

          case "usd":
            return +moneyAmount;
        }
        break;
      case "eur":
        switch (convertToCurrency) {
          case "usd":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "USD"
            ).in1EUR;
            return moneyAmount * exchangecurrency;

          case "pln":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "PLN"
            ).in1EUR;
            return moneyAmount * exchangecurrency;

          case "chf":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "CHF"
            ).in1EUR;
            return moneyAmount * exchangecurrency;

          case "rub":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "RUB"
            ).in1EUR;
            return moneyAmount * exchangecurrency;

          case "eur":
            return +moneyAmount;
        }
        break;
      case "pln":
        switch (convertToCurrency) {
          case "usd":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "USD"
            ).in1PLN;
            return moneyAmount * exchangecurrency;

          case "eur":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "EUR"
            ).in1PLN;
            return moneyAmount * exchangecurrency;

          case "chf":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "CHF"
            ).in1PLN;
            return moneyAmount * exchangecurrency;

          case "rub":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "RUB"
            ).in1PLN;
            return moneyAmount * exchangecurrency;

          case "pln":
            return +moneyAmount;
        }
        break;
      case "chf":
        switch (convertToCurrency) {
          case "usd":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "USD"
            ).in1CHF;
            return moneyAmount * exchangecurrency;

          case "eur":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "EUR"
            ).in1CHF;
            return moneyAmount * exchangecurrency;

          case "pln":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "PLN"
            ).in1CHF;
            return moneyAmount * exchangecurrency;

          case "rub":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "RUB"
            ).in1CHF;
            return moneyAmount * exchangecurrency;

          case "chf":
            return +moneyAmount;
        }
        break;
      case "rub":
        switch (convertToCurrency) {
          case "usd":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "USD"
            ).in1CHF;
            return moneyAmount * exchangecurrency;

          case "eur":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "EUR"
            ).in1CHF;
            return moneyAmount * exchangecurrency;

          case "pln":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "PLN"
            ).in1CHF;
            return moneyAmount * exchangecurrency;

          case "chf":
            exchangecurrency = currencies.find(
              (currency) => currency.name === "CHF"
            ).in1CHF;
            return moneyAmount * exchangecurrency;

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
      <Result result={result} resultData={resultData} />
      <Footer result={result} />
    </Container>
  );
}

export default App;
