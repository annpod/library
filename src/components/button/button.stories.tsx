import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SubmitButton, ISubmitButton } from './submit-button';

export default {
  title: 'Example/SubmitButton',
  component: SubmitButton,  
} as Meta;

const Template: Story<ISubmitButton> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isDisabled: true,
  isLoading: true,
  title: 'Save'
};

export const Secondary = Template.bind({});
Secondary.args = {
  isDisabled: false,
  isLoading: false,
  title: 'Save'
};


