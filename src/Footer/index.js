import "./style.css";

const Footer = ({ result }) => (
  <footer>
    {result ? (
      <p className="footer">
        Kursy walut pochodzą ze strony:
        <a
          className="footer_link"
          href="https://nbp.pl/statystyka-i-sprawozdawczosc/kursy/"
          target="_blank"
          rel="noreferrer"
          więcej
          o
          kursach
          walut
          i
          ich
          przeliczaniu
        >
          nbp.pl
        </a>
      </p>
    ) : (
      ""
    )}
  </footer>
);

export default Footer;
