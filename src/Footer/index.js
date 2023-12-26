import { StyledFooter, CurrencyApiAnchor } from "./styled";
const Footer = ({ result }) => (
  <footer>
    {result.targetAmount && (
      <StyledFooter>
        Kursy walut są pobierane z Europejskiego Banku Centralnego przy użyciu{" "}
        <CurrencyApiAnchor
          href="https://currencyapi.com/"
          target="_blank"
          rel="noreferrer"
          title="API wykorzystywane do przelicznia"
        >
          Currency&nbsp;Conversion&nbsp;Api
        </CurrencyApiAnchor>
      </StyledFooter>
    )}
  </footer>
);

export default Footer;
