import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { LibThemeProvider } from './theme-provider';
import { theme as themes, DEFAULT_THEME } from '../constants/theme';
import { SubmitButton } from '../button';

export default {
  title: 'App/ThemeProvider',
  component: LibThemeProvider
} as Meta;

const Template: Story<any> = (args) => (
  <LibThemeProvider {...args}>
    <SubmitButton isDisabled={false} isLoading={false} onClick={() => {}} />
  </LibThemeProvider>
);

export const Primary = Template.bind({});

Primary.args = {
  theme: themes[DEFAULT_THEME],
  themeName: DEFAULT_THEME
};
