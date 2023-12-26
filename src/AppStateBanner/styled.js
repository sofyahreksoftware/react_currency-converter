import { css, styled } from "styled-components";

export const AppStateBannerText = styled.p`
  padding: 50px;
  margin: 0 auto;
    ${({ $loading }) =>
      $loading &&
      css`
         color: ${({ theme }) => theme.colors.teal};
      `};

  ${({ $error }) =>
    $error &&
    css`
      color: ${({ theme }) => theme.colors.crimson};
    `};
`;
