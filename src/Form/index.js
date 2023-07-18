import "./style.css";

function Form() {
  return (
    <form className="form">
      <header className="form__header">Kalkulator walut</header>
      <fildset className="form__fieldset">
        <label className="form__label">
          <p className="form__labelText">Podaj kwotę:</p>
          <input
            className="form__field"
            min="1"
            name="amount"
            required
            placeholder="0.00"
            type="number"
            autoFocus
          />
        </label>
      </fildset>

      <fieldset className="form__fieldset">
        <label className="form__label">
          <p className="form__labelText">Przelicz z:</p>
          <select className="form__field" name="convertFrom">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="pln">PLN</option>
            <option value="rub">RUB</option>
            <option value="chf">CHF</option>
          </select>
        </label>

        <label className="form__label">
          <p className="form__labelText">na:</p>
          <select className="form__field" name="convertTo">
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
      <p className="form__result">
        <em className="js__result"> </em>
      </p>
    </form>
  );
}

export default Form;
