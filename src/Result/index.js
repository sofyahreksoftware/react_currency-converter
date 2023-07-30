import "./style.css";

const Result = ({
  result,
  moneyAmount,
  convertFromCurrency,
  convertToCurrency,
}) => (
  <p className="result">
    {result &&
      `${+moneyAmount} ${convertFromCurrency.toUpperCase()} 
      = 
      ${result.toFixed(2)}${convertToCurrency.toUpperCase()}
    `}
  </p>
);

export default Result;
