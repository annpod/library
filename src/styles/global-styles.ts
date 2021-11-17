import { createGlobalStyle, css } from 'styled-components';

import {
  GothamMediumSvg,
  GothamMediumEot,
  GothamMediumWoff,
  GothamMediumTtf,
  GothamBookSvg,
  GothamBookEot,
  GothamBookWoff,
  GothamBookTtf,
  GothamBookItalicSvg,
  GothamBookItalicEot,
  GothamBookItalicWoff,
  GothamBookItalicTtf
} from '../fonts';

const sharedStyle = css`
  body {
    font-family: 'Gotham-Medium';
    margin: 0;
    padding: 0;
  }
  .Toastify .Toastify__toast-container {
    width: auto;
    max-width: 470px;
  }

  .Toastify__toast-container--top-center {
    top: 135px;
  }
  .Toastify__toast-container--bottom-center {
    bottom: 60px;
  }

  .breadcrumb {
    font-family: 'Gotham-Book';
    font-size: 10px;
    color: #707070;
    cursor: pointer;
  }

  .navigation {
    font-size: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: 'auto';
    background: 'transparent';
    border-bottom: 1px solid #f7f7f7;
  }
  .navigation svg {
    width: 30px;
    height: 30px;
  }
  .navigation.active {
    background: #f7f7f7;
  }
  .navigation.disabled {
    pointer-events: 'none';
    background: 'repeating-linear-gradient(45deg,#909090,#909090 10px,#BEBEBE 10px,#BEBEBE 17px)';
  }

  .tab {
    color: #707070;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    padding: 2px 10px;
    margin-right: 30px;
    border-radius: 30px;
    cursor: pointer;
    text-decoration: none;
    font-size: 13px;
    margin-bottom: 10px;
    font-family: 'Gotham-Medium';
  }
  .tab.active {
    color: #f93549;
    border-color: #f93549;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${sharedStyle}
`;

export const GlobalStylesLib = createGlobalStyle`
  @font-face {
    font-family: 'Gotham-Medium';
    src: url(${GothamMediumEot}) format('embedded-opentype');
    src: url(${GothamMediumSvg}) format('svg'),
    url(${GothamMediumTtf}) format('truetype'),
    url(${GothamMediumWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-Book';
    src: url(${GothamBookEot}) format('embedded-opentype');
    src: url(${GothamBookSvg}) format('svg'),
    url(${GothamBookTtf}) format('truetype'),
    url(${GothamBookWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Gotham-BookItalic';
    src: url(${GothamBookItalicEot}) format('embedded-opentype');
    src: url(${GothamBookItalicSvg}) format('svg'),
    url(${GothamBookItalicTtf}) format('truetype'),
    url(${GothamBookItalicWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  ${sharedStyle}
`;
