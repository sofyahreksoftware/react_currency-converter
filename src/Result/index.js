import "./style.css";

const Result = ({ result }) => (
  <p className="result">
    {result.targetAmount
      ? `${+result.sourceAmount}${result.convertFromCurrency.toUpperCase()} 
      =  ${
        result.targetAmount ? result.targetAmount.toFixed(2) : "0"
      }${result.convertToCurrency.toUpperCase()}
    `
      : ""}
  </p>
);

export default Result;
