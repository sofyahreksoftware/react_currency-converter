import "./style.css";
// import React, { useState } from "react";

function Form({
  moneyAmount,
  setMoneyAmount,
  convertFromCurrency,
  setConvertFromCurrency,
  convertToCurrency,
  setConvertToCurrency,
  calculateResult,
  setResult,
}) {
  const onFormSubmit = (event) => {
    event.preventDefault();
    const calculatedResult = calculateResult(
      moneyAmount,
      convertFromCurrency,
      convertToCurrency
    );
    setResult(calculatedResult);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <header className="form__header">Kalkulator walut</header>
      <fildset className="form__fieldset">
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
      </fildset>

      <fieldset className="form__fieldset">
        <label className="form__label">
          <p>Przelicz z:</p>
          <select
            className="form__field"
            name="convertFrom"
            value={convertFromCurrency}
            onChange={(event) => setConvertFromCurrency(event.target.value)}
          >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="pln">PLN</option>
            <option value="rub">RUB</option>
            <option value="chf">CHF</option>
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
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="pln">PLN</option>
            <option value="rub">RUB</option>
            <option value="chf">CHF</option>
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
