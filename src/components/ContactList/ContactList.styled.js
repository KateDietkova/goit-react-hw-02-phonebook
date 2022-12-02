import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ContactListItemStyled = styled.li`
  border: 1px solid;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  width: 300px;
`;
