import styled from "styled-components";

export const StyledFooter = styled.p`
  color: ${({theme})=> theme.colors.gray};
  font-weight: lighter;
  text-align: center;
  font-family: "Prompt", sans-serif;
`;
export const A = styled.a`
  color: ${({theme})=> theme.colors.gray};
  font-weight: bold;
`;
