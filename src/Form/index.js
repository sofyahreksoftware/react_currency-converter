import "./style.css";
import { currencies } from "../currencies.js";

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
    <form className="form" onSubmit={onFormSubmit}>
      <header className="form__header">Kalkulator walut</header>
      <fieldset className="form__fieldset">
        <label className="form__label">
          <p>Podaj kwotę:</p>
          <input
            className="form__field"
            min="1"
            name="amount"
            required
            placeholder="0.00"
            type="number"
            autoFocus
            value={moneyAmount}
            onChange={(event) => setMoneyAmount(event.target.value)}
          />
        </label>
      </fieldset>

      <fieldset className="form__fieldset">
        <label className="form__label">
          <p>Przelicz z:</p>
          <select
            className="form__field"
            name="convertFrom"
            value={convertFromCurrency}
            onChange={(event) => setConvertFromCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.value}>
                {currency.name}
              </option>
            ))}
          </select>
        </label>

        <label className="form__label">
          <p>na:</p>
          <select
            className="form__field"
            name="convertTo"
            value={convertToCurrency}
            onChange={(event) => setConvertToCurrency(event.target.value)}
          >
            {currencies.map((currency) => (
              <option key={currency.name} value={currency.value}>
                {currency.name}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
      <p>
        <button className="form__button js__button">Przelicz kwotę</button>
      </p>
    </form>
  );
}
export default Form;
