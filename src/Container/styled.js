import styled from "styled-components";

export const StyledContainer = styled.main`
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 15px;
  padding: 20px;
  margin: 0 auto;
  /* flex-direction: column; */

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    width: 100%;
    margin: 50% auto;
  }
`;
