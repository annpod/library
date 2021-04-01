import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Themes } from './theme-prewiev';

export default {
  title: 'Themes/Themes',
  component: Themes
} as Meta;

const Template: Story<any> = (args) => (
  <Themes />    
);

export const Primary = Template.bind({});

