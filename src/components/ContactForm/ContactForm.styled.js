import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  padding: 20px;
  border: 1px solid;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 4px;
  background-color: #eaf2f2;
`;

export const FieldStyled = styled(Field)`
  outline: none;
  padding: 8px;
  border-radius: 5px;
  :focus:valid {
    border-color: #1eeb25;
  }

  :focus:invalid {
    border-color: #eb1e1e;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  width: 100px;
  padding: 10px 12px;
  border: none;
  margin: 0 auto;
  text-align: center;
  cursor: pointer;
  background-color: #07bad2;
  border-radius: 5px;

  :hover {
    background-color: #1371d6;
  }
`;


