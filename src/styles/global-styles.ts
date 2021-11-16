import { createGlobalStyle  } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gotham-Book';
    src: url ('../assets/fonts/gotham-medium.eot') format('embedded-opentype');
    src: local('Gotham-Book'), local('GothamBook'), url ('../assets/fonts/gotham-medium.svg') format('svg'),
    url ('../assets/fonts/gotham-medium.ttf) format('truetype'),
    url ('../assets/fonts/gotham-medium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  body {
    font-family: 'Gotham-Book';
    margin: 0;
    padding: 0;
  }
`;
