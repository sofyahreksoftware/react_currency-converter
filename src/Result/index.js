import "./style.css";

const Result = ({ resultData }) => (
  <p className="result">
    {`${+resultData.moneyAmount} ${resultData.convertFromCurrency.toUpperCase()} 
      = 
      ${resultData.result.toFixed(
        2
      )}${resultData.convertToCurrency.toUpperCase()}
    `}
  </p>
);

export default Result;
