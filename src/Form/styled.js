import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0px;
  border: none;
`;

export const Header = styled.header`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  justify-content: center;
  margin: 40px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  border: none;
  gap: 20px;
  margin: -15px auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    margin: 0;
  }
`;

export const LabelInput = styled.select`
  border-radius: 5px;
  border: solid ${({ theme }) => theme.colors.gray} 1px;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
   flex-basis: 100%;
   flex-grow: 4;
  }
`;

export const LabelSelect = styled(LabelInput)`
@media (max-width: ${({ theme }) => theme.media.mobile}px) {
   flex-grow: 1;
  }
`;

export const LabelText = styled(LabelInput)`
  border: none;
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 69%;
  padding: 10px;
  color: ${({ theme }) => theme.colors.coffeeBean};
  font-size: 20px;
  border-radius: 5px;
  border: solid ${({ theme }) => theme.colors.coffeeBean} 1px;
  -webkit-box-shadow: inset 45px 60px 83px -53px rgba(0, 128, 128, 1);
  -moz-box-shadow: inset 45px 60px 83px -53px rgba(0, 128, 128, 1);
  box-shadow: inset 45px 60px 83px -53px rgba(0, 128, 128, 1);

  &:active {
    background-color: ${({ theme }) => theme.colors.goldenDream};
  }
`;
