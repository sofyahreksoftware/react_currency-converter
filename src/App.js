import Container from "./Container";
import Watch from "./Watch";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import Article from "./Article";
import { useState } from "react";
import { useCurrenciesData } from "./useCurrenciesData.js";

function App() {
  const [currencies] = useCurrenciesData();

  const [result, setResult] = useState({});

  const [moneyAmount, setMoneyAmount] = useState("");

  const [convertFromCurrency, setConvertFromCurrency] = useState("USD");

  const [convertToCurrency, setConvertToCurrency] = useState("EUR");

  
  const calculateResult = (
    moneyAmount,
    convertFromCurrency,
    convertToCurrency
  ) => {
    let sourceValue;
    sourceValue = moneyAmount / currencies.data.data[convertFromCurrency].value;

    let exchangeRate;
    exchangeRate = currencies.data.data[convertToCurrency].value;

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
      <Article currencies={currencies}>
        {" "}
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
      </Article>
    </Container>
  );
}

export default App;
