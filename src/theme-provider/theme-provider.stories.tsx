import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LibThemeProvider } from './theme-provider';
import { theme as themes, DEFAULT_THEME } from '../themes/theme';

export default {
  title: 'Themes/ThemeProvider',
  component: LibThemeProvider,
  parameters: {
    docs: {
      source: {
        code: `<LibThemeProvider theme={themeProps} themeName={themeName} >        
          Content
        </LibThemeProvider>`
      }
    }
  }
} as Meta;

const Template: Story<any> = (args) => (
  <LibThemeProvider {...args}>Content</LibThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  theme: themes[DEFAULT_THEME],
  themeName: DEFAULT_THEME
};
