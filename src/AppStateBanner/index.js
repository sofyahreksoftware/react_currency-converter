import { AppStateBannerText } from "./styled";

const AppStateBanner = ({ children, currencies }) => (
  <article>
    {currencies.status === "success" && children}

    {currencies.status === "loading" && (
      <AppStateBannerText $loading>
        Sekundka... Ładuję kursy z Europejskiego Banku Centralnego!🤪😎
      </AppStateBannerText>
    )}

    {currencies.status === "error" && (
      <AppStateBannerText $error>
        "Coś poszło nie tak 😱😭 Sprawdź, czy masz połączenie z internetem!
        Jeśli masz... to prawdopodobnie to nasza wina. Może warto spróbować
        później! 😉
      </AppStateBannerText>
    )}
  </article>
);

export default AppStateBanner;
