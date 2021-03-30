import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme as themes } from '../constants/theme';

export const LibThemeProvider = (props: any) => {
  const theme = { ...themes[props.themeName], ...props.theme };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};
