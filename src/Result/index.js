import { StyledResult } from "./styled";

const Result = ({ result }) => (
  <StyledResult>
    {result.targetAmount
      ? `${+result.sourceAmount}${result.convertFromCurrency.toUpperCase()} 
      =  ${
        result.targetAmount ? result.targetAmount.toFixed(2) : "0"
      }${result.convertToCurrency.toUpperCase()}
    `
      : ""}
  </StyledResult>
);

export default Result;
