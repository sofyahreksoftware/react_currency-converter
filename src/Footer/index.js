import { StyledFooter, A } from "./styled";
const Footer = ({ result }) => (
  <footer>
    {result.targetAmount && (
      <StyledFooter>
        Kursy walut pochodzą ze strony:{" "}
        <A
          href="https://nbp.pl/statystyka-i-sprawozdawczosc/kursy/"
          target="_blank"
          rel="noreferrer"
          title="więcej
        o
        kursach
        walut
        i
        ich
        przeliczaniu"
        >
          nbp.pl
        </A>
      </StyledFooter>
    )}
  </footer>
);

export default Footer;
