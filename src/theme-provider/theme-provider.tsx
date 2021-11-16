import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles';
import { theme as themes } from '../themes';

export const LibThemeProvider = (props: any) => {
  const theme = { ...themes[props.themeName], ...props.theme };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {props.children}
      </>
    </ThemeProvider>
  );
};
