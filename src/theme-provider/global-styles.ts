import { createGlobalStyle } from 'styled-components';
import GothamMediumSvg from '../fonts/book/gotham-book.svg';
const GothamMediumEot = require('../fonts/book/gotham-book.eot');
const GothamMediumWoff = require('../fonts/book/gotham-book.woff');
const GothamMediumTtf = require('../fonts/book/gotham-book.ttf');

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Gotham-Medium';
  src: url(${GothamMediumEot}) format('eot');
  src: url(${GothamMediumSvg}) format('svg'),
  url(${GothamMediumTtf}) format('ttf'),
  url(${GothamMediumWoff}) format('woff');
  font-weight: normal;
  font-style: normal;
}
  body {
    font-family: 'Gotham-Medium';
    margin: 0;
    padding: 0;
  }
`;
