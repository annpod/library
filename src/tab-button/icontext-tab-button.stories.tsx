import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { IconTextTabButton } from './tab-button';
import { IIconTextTabButtonProps } from '../typings';

export default {
  title: 'Buttons/IconTextTabButton',
  component: IconTextTabButton
} as Meta;

const Template: Story<IIconTextTabButtonProps> = (args) => <IconTextTabButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  icon:"#", 
  title: 'Title',
  disabled: false,
  section: 'First section',
  className: 'firstSection',
  // eslint-disable-next-line
  onClick: (section: string) => {},
  selected: true,
};
