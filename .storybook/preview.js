import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStylesLib } from '../src/styles';
import {
  theme,
  DEFAULT_THEME,
  SCB_THEME,
  BT_THEME,
  AMEREN_THEME
} from '../src/themes';

const themes = [
  theme[DEFAULT_THEME],
  theme[SCB_THEME],
  theme[BT_THEME],
  theme[AMEREN_THEME]
];

addDecorator(withThemesProvider(themes), ThemeProvider);
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [
  (Story, context) => {
    return (
        <>
          <GlobalStylesLib />
          <Story />
        </>
    );
  },
];