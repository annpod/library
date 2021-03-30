import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ThemeProvider } from './theme-provider';
import { theme as themes, DEFAULT_THEME } from '../constants/theme';


export default {
  title: 'App/ThemeProvider',
  component: ThemeProvider
} as Meta;

const Template: Story<any> = (args) => <ThemeProvider {...args}>Content</ThemeProvider>;

export const Primary = Template.bind({});

Primary.args = {
  theme: themes[DEFAULT_THEME],
  themeName: DEFAULT_THEME,
};
