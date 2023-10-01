import { currencies } from "../currencies.js";
import {
  StyledForm,
  Header,
  Fieldset,
  Label,
  FormField,
  Button,
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
          <p>Podaj kwotę:</p>
          <FormField
            as="input"
            min="1"
            name="amount"
            required
            placeholder="0.00"
            type="number"
            autoFocus
            value={moneyAmount}
            onChange={(event) => setMoneyAmount(event.target.value)}
          />
        </Label>
      </Fieldset>

      <Fieldset>
        <Label>
          <p>Przelicz z:</p>
          <FormField
            name="convertFrom"
            value={convertFromCurrency}
            onChange={(event) => setConvertFromCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.value}>
                {currency.name}
              </option>
            ))}
          </FormField>
        </Label>

        <Label>
          <p>na:</p>
          <FormField
            name="convertTo"
            value={convertToCurrency}
            onChange={(event) => setConvertToCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.value}>
                {currency.name}
              </option>
            ))}
          </FormField>
        </Label>
      </Fieldset>
      <p>
        <Button>Przelicz kwotę</Button>
      </p>
    </StyledForm>
  );
}
export default Form;
