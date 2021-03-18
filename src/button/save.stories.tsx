import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SaveBtn } from './save';

export default {
  title: 'Buttons/SaveBtn',
  component: SaveBtn
} as Meta;

const Template: Story<any> = (args) => <SaveBtn {...args}>{args.children}</SaveBtn>;

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  children: 'Save',
  onClick: () => {}
};
