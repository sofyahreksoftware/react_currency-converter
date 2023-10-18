import { currencies } from "../currencies.js";
import {
  StyledForm,
  Header,
  Fieldset,
  Label,
  LabelInput,
  Button,
  LabelText,
  LabelSelect
} from "./styled";

function Form({
  moneyAmount,
  setMoneyAmount,
  convertFromCurrency,
  setConvertFromCurrency,
  convertToCurrency,
  setConvertToCurrency,
  calculateResult,
}) {
  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(moneyAmount, convertFromCurrency, convertToCurrency);
    setMoneyAmount("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Header>Kalkulator walut</Header>
      <Fieldset>
        <Label>
          <LabelText as="p">Podaj&nbsp;kwotę:</LabelText>
          <LabelInput
            as="input"
            min="1"
            name="amount"
            required
            placeholder="0,00"
            type="number"
            step="0.01"
            autoFocus
            value={moneyAmount}
            onChange={(event) => setMoneyAmount(event.target.value)}
          />
        </Label>
      </Fieldset>

      <Fieldset>
        <Label>
          <LabelText as="p">Przelicz z:</LabelText>
          <LabelSelect
            name="convertFrom"
            value={convertFromCurrency}
            onChange={(event) => setConvertFromCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.value}
              </option>
            ))}
          </LabelSelect>
        </Label>

        <Label>
          <LabelText as="p">na:</LabelText>
          <LabelSelect
            name="convertTo"
            value={convertToCurrency}
            onChange={(event) => setConvertToCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.value} value={currency.value}>
                {currency.value}
              </option>
            ))}
          </LabelSelect>
        </Label>
      </Fieldset>
      <p>
        <Button>Przelicz kwotę</Button>
      </p>
    </StyledForm>
  );
}
export default Form;
