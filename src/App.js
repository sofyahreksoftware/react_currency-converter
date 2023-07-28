import Container from "./Container";
import Form from "./Form";
import React, { useState } from "react";
import { rates } from "./rates.js";
// import Result from "./Result";

function App() {
  const [result, setResult] = useState("");

  const [moneyAmount, setMoneyAmount] = useState("");

  const [convertFromCurrency, setConvertFromCurrency] = useState("usd");

  const [convertToCurrency, setConvertToCurrency] = useState("eur");

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
            setResult(moneyAmount * exchangeRate);

          case "pln":
            exchangeRate = rates.find((rate) => rate.currency === "PLN").in1USD;
            setResult(moneyAmount * exchangeRate);

          case "chf":
            exchangeRate = rates.find((rate) => rate.currency === "CHF").in1USD;
            setResult(moneyAmount * exchangeRate);

          case "rub":
            exchangeRate = rates.find((rate) => rate.currency === "RUB").in1USD;
            setResult(moneyAmount * exchangeRate);

          case "usd":
            setResult(+moneyAmount);
        }
        break;
      case "eur":
        switch (convertToCurrency) {
          case "usd":
            exchangeRate = rates.find((rate) => rate.currency === "USD").in1EUR;
            setResult(moneyAmount * exchangeRate);

          case "pln":
            exchangeRate = rates.find((rate) => rate.currency === "PLN").in1EUR;
            setResult(moneyAmount * exchangeRate);

          case "chf":
            exchangeRate = rates.find((rate) => rate.currency === "CHF").in1EUR;
            setResult(moneyAmount * exchangeRate);

          case "rub":
            exchangeRate = rates.find((rate) => rate.currency === "RUB").in1EUR;
            setResult(moneyAmount * exchangeRate);

          case "eur":
            setResult(+moneyAmount);
        }
        break;
      case "pln":
        switch (convertToCurrency) {
          case "usd":
            exchangeRate = rates.find((rate) => rate.currency === "USD").in1PLN;
            setResult(moneyAmount * exchangeRate);

          case "eur":
            exchangeRate = rates.find((rate) => rate.currency === "EUR").in1PLN;
            setResult(moneyAmount * exchangeRate);

          case "chf":
            exchangeRate = rates.find((rate) => rate.currency === "CHF").in1PLN;
            setResult(moneyAmount * exchangeRate);

          case "rub":
            exchangeRate = rates.find((rate) => rate.currency === "RUB").in1PLN;
            setResult(moneyAmount * exchangeRate);

          case "pln":
            setResult(+moneyAmount);
        }
        break;
      case "chf":
        switch (convertToCurrency) {
          case "usd":
            exchangeRate = rates.find((rate) => rate.currency === "USD").in1CHF;
            setResult(moneyAmount * exchangeRate);

          case "eur":
            exchangeRate = rates.find((rate) => rate.currency === "EUR").in1CHF;
            setResult(moneyAmount * exchangeRate);

          case "pln":
            exchangeRate = rates.find((rate) => rate.currency === "PLN").in1CHF;
            setResult(moneyAmount * exchangeRate);

          case "rub":
            exchangeRate = rates.find((rate) => rate.currency === "RUB").in1CHF;
            setResult(moneyAmount * exchangeRate);

          case "chf":
            setResult(+moneyAmount);
        }
        break;
      case "rub":
        switch (convertToCurrency) {
          case "usd":
            exchangeRate = rates.find((rate) => rate.currency === "USD").in1CHF;
            setResult(moneyAmount * exchangeRate);

          case "eur":
            exchangeRate = rates.find((rate) => rate.currency === "EUR").in1CHF;
            setResult(moneyAmount * exchangeRate);

          case "pln":
            exchangeRate = rates.find((rate) => rate.currency === "PLN").in1CHF;
            setResult(moneyAmount * exchangeRate);

          case "chf":
            exchangeRate = rates.find((rate) => rate.currency === "CHF").in1CHF;
            setResult(moneyAmount * exchangeRate);

          case "rub":
            setResult(+moneyAmount);
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
        result={result}
      />
      {/* <Result result={result} /> */}
    </Container>
  );
}

export default App;
