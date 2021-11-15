import { createGlobalStyle  } from 'styled-components';
// import GothamMediumSvg from '../fonts/book/gotham-book.svg';
// const GothamMediumEot = require('../fonts/book/gotham-book.eot');
// const GothamMediumWoff = require('../fonts/book/gotham-book.woff');
// const GothamMediumTtf = require('../fonts/book/gotham-book.ttf');

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gotham-Book';
    src: url('../assets/fonts/gotham-book.eot') format('eot');
    src: url('../assets/fonts/gotham-book.svg') format('svg'),
    url('../assets/fonts/gotham-book.ttf') format('truetype'),
    url('../assets/fonts/gotham-book.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Medium';
    src: url('../assets/fonts/gotham-medium.eot') format('eot');
    src: url('../assets/fonts/gotham-medium.svg') format('svg'),
    url('../assets/fonts/gotham-medium.ttf') format('truetype'),
    url('../assets/fonts/gotham-medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Gotham-Medium';
    margin: 0;
    padding: 0;
  }
`;
