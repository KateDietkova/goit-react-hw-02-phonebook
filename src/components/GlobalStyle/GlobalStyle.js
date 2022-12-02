import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  h1, h2 {
    margin-top: 0;
    padding: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;
