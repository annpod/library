import { createGlobalStyle  } from 'styled-components';

import {
  GothamMediumSvg,
  GothamMediumEot,
  GothamMediumWoff,
  GothamMediumTtf
} from '../assets/fonts';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gotham-Book';
    src: url(${GothamMediumEot}) format('embedded-opentype');
    src: local('Gotham Book'), local('Gotham-Book'), url(${GothamMediumSvg}) format('svg'),
    url(${GothamMediumTtf}) format('truetype'),
    url(${GothamMediumWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Gotham-Book';
    margin: 0;
    padding: 0;
  }
`;
