import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as themes } from '../themes';
import { GlobalStyles } from '../styles/global-styles';

export const LibThemeProvider = (props: any) => {
  const theme = { ...themes[props.themeName], ...props.theme };

  return <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    {props.children}
    </></ThemeProvider>;
};
