import Container from "./Container";
import Watch from "./Watch";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import AppStateBanner from "./AppStateBanner";
import { useState } from "react";
import { useCurrenciesData } from "./useCurrenciesData.js";

function App() {
  const [currencies] = useCurrenciesData();
 
  const [result, setResult] = useState({});

  const [moneyAmount, setMoneyAmount] = useState("");

  const [convertFromCurrency, setConvertFromCurrency] = useState("USD");

  const [convertToCurrency, setConvertToCurrency] = useState("EUR");

  return (
    <Container>
      <Watch />
      <AppStateBanner currencies={currencies}>
        <Form
          moneyAmount={moneyAmount}
          setMoneyAmount={setMoneyAmount}
          convertFromCurrency={convertFromCurrency}
          setConvertFromCurrency={setConvertFromCurrency}
          convertToCurrency={convertToCurrency}
          setConvertToCurrency={setConvertToCurrency}
          currencies={currencies}
          setResult={setResult}
        />
        <Result result={result} />
        <Footer result={result} />
      </AppStateBanner>
    </Container>
  );
}

export default App;
