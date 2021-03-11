import { createGlobalStyle } from 'styled-components';

import background from '../assets/img/background.jpg';

// TODO: Update with {theme} prop
export const GlobalStyles = createGlobalStyle`
  body {
    background: url(${background}) no-repeat, #434448;
    background-size: cover;
  }
`;
