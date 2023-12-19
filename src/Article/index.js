import { ArticleText } from "./styled";

const Article = ({ children, currencies }) => (
  <article>
    {currencies.status === "success" && children}

    {currencies.status === "loading" && (
      <ArticleText loading>
        Sekundka... Ładuję kursy z Europejskiego Banku Centralnego!🤪😎
      </ArticleText>
    )}

    {currencies.status === "error" && (
      <ArticleText error>
        "Coś poszło nie tak 😱😭 Sprawdź, czy masz połączenie z internetem!
        Jeśli masz... to prawdopodobnie to nasza wina. Może warto spróbować
        później! 😉
      </ArticleText>
    )}
  </article>
);
export default Article;
