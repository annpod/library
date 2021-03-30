import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import { theme, DEFAULT_THEME, SCB_THEME, BT_THEME } from '../constants/theme';

const libTheme = {
  [DEFAULT_THEME]: theme[DEFAULT_THEME],
  [SCB_THEME]: theme[SCB_THEME],
  [BT_THEME]: theme[BT_THEME]
};

export const ThemeProvider = (props: any) => {
  const theme = {
    myComponentLib: Object.assign({}, libTheme[props.themeName], props.theme)
  };
  return <Provider theme={theme}>{props.children}</Provider>;
};
