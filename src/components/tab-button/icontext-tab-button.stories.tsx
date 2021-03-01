import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { IconTextTabButton, IIconTextTabButtonProps } from './tab-button';

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
  onClick: (section: string) => {
    // tslint:disable-next-line:no-console
    console.log('section', section);
  },
  selected: true,
};
