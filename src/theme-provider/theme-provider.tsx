import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import { theme as themes } from '../constants/theme';

export const ThemeProvider = (props: any) => {
  const theme = {...themes[props.themeName], ...props.theme};
  // tslint:disable-next-line:no-console
  console.log('theme', theme);
  
  return <Provider theme={theme}>{props.children}</Provider>;
};
