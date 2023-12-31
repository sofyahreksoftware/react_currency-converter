import { StyledResult, ResultValue } from "./styled";

function Result({ result }) {
  const formatAmount = (value) => {
    return value.toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <StyledResult>
      {result.targetAmount && (
        <p>
          {formatAmount(+result.sourceAmount)} {result.convertFromCurrency} ={" "}
          <ResultValue>
            {result.targetAmount && formatAmount(result.targetAmount)}
            {result.convertToCurrency}
          </ResultValue>
        </p>
      )}
    </StyledResult>
  );
}

export default Result;
