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
  margin: 0 90px;
  flex-direction: row;
  text-align: start;
  justify-content: center;
  border: none;
  gap: 5px;
  margin: auto;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  gap: 15px;

  @media (max-width: 572px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
`;
export const FormField = styled.select`
  border-radius: 5px;
  border: solid hsl(0, 0%, 50%) 1px;
  padding: 10px;

  @media (max-width: 572px) {
    max-width: 200%;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 69%;
  padding: 10px;
  color: hsl(0, 59%, 11%);
  font-size: 20px;
  border-radius: 5px;
  border: solid hsl(0, 0%, 50%) 1px;
  -webkit-box-shadow: inset 45px 60px 83px -53px rgba(0, 128, 128, 1);
  -moz-box-shadow: inset 45px 60px 83px -53px rgba(0, 128, 128, 1);
  box-shadow: inset 45px 60px 83px -53px rgba(0, 128, 128, 1);
  
  &:active {
    background-color: #f2d53c;
  }
`;
