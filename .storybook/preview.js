import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import {
  theme,
  DEFAULT_THEME,
  SCB_THEME,
  BT_THEME
} from '../src/constants/theme';

const themes = [theme[DEFAULT_THEME], theme[SCB_THEME], theme[BT_THEME]];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
