import Container from "./Container";
import Watch from "./Watch";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useCurrenciesData } from "./useCurrenciesData.js";

function App() {
  const [currencies] = useCurrenciesData();

  const [result, setResult] = useState({});

  const [moneyAmount, setMoneyAmount] = useState("");

  const [convertFromCurrency, setConvertFromCurrency] = useState("USD");

  const [convertToCurrency, setConvertToCurrency] = useState("EUR");

  useEffect(() => console.log(currencies), []);

  const calculateResult = (
    moneyAmount,
    convertFromCurrency,
    convertToCurrency
  ) => {
    let sourceValue = moneyAmount;
    if (convertFromCurrency !== "USD")
      sourceValue =
        currencies.find((currency) => currency.value === convertFromCurrency)
          .rates["USD"] * moneyAmount;

    let exchangeRate = 1;
    if (convertToCurrency !== "USD")
      exchangeRate = currencies.find((currency) => currency.value === "USD")
        .rates[convertToCurrency];

    setResult({
      sourceAmount: +moneyAmount,
      convertFromCurrency,
      targetAmount: sourceValue * exchangeRate,
      convertToCurrency,
    });
  };

  return (
    <Container>
      <Watch />
      <Form
        moneyAmount={moneyAmount}
        setMoneyAmount={setMoneyAmount}
        convertFromCurrency={convertFromCurrency}
        setConvertFromCurrency={setConvertFromCurrency}
        convertToCurrency={convertToCurrency}
        setConvertToCurrency={setConvertToCurrency}
        calculateResult={calculateResult}
        currencies={currencies}
      />
      <Result result={result} />
      <Footer result={result} />
    </Container>
  );
}

export default App;
