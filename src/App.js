import Container from "./Container";
import Form from "./Form";
import React, { useState } from "react";
import { currencies } from "./currencies.js";
import Result from "./Result";
import Footer from "./Footer";

function App() {
  const [result, setResult] = useState({});

  const [moneyAmount, setMoneyAmount] = useState("");

  const [convertFromCurrency, setConvertFromCurrency] = useState("usd");

  const [convertToCurrency, setConvertToCurrency] = useState("eur");

  const calculateResult = (
    moneyAmount,
    convertFromCurrency,
    convertToCurrency
  ) => {
    let exchangeCurrency;
    switch (convertFromCurrency) {
      case "usd":
        exchangeCurrency = currencies.find(
          (currency) => currency.value === convertToCurrency
        ).in1USD;
        break;
      case "eur":
        exchangeCurrency = currencies.find(
          (currency) => currency.value === convertToCurrency
        ).in1EUR;
        break;
      case "pln":
        exchangeCurrency = currencies.find(
          (currency) => currency.value === convertToCurrency
        ).in1PLN;
        break;
      case "chf":
        exchangeCurrency = currencies.find(
          (currency) => currency.value === convertToCurrency
        ).in1CHF;
        break;
      case "rub":
        exchangeCurrency = currencies.find(
          (currency) => currency.value === convertToCurrency
        ).in1RUB;
        break;
      default:
    }

    setResult({
      sourceAmount: +moneyAmount,
      convertFromCurrency,
      targetAmount: moneyAmount * exchangeCurrency,
      convertToCurrency,
    });
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
      />
      <Result result={result} />
      <Footer result={result} />
    </Container>
  );
}

export default App;
