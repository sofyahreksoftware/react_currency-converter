import { StyledResult } from "./styled";

const Result = ({ result }) => (
  <StyledResult>
    {result.targetAmount &&
      `${+result.sourceAmount}${result.convertFromCurrency} 
      =  ${result.targetAmount ? result.targetAmount.toFixed(2) : "0"}${
        result.convertToCurrency
      }
    `}
  </StyledResult>
);

export default Result;
