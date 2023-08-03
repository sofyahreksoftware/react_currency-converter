import "./style.css";

const Result = ({ result, resultData }) => (
  <p className="result">
    {result
      ? `${+resultData.moneyAmount}${resultData.convertFromCurrency.toUpperCase()} 
      =  ${
        resultData.result ? resultData.result.toFixed(2) : "0"
      }${resultData.convertToCurrency.toUpperCase()}
    `
      : ""}
  </p>
);

export default Result;
