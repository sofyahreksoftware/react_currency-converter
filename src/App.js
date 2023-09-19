import Container from "./Container";
import Watch from "./Watch";
import Form from "./Form";
import { currencies } from "./currencies.js";
import Result from "./Result";
import Footer from "./Footer";
import { useState } from "react";

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
    const exchangeCurrency = currencies.find(
      (currency) => currency.value === convertToCurrency
    ).rates[convertFromCurrency];

    setResult({
      sourceAmount: +moneyAmount,
      convertFromCurrency,
      targetAmount: moneyAmount * exchangeCurrency,
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
      />
      <Result result={result} />
      <Footer result={result} />
    </Container>
  );
}

export default App;
