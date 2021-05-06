import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input } from './input';
import { IInputProps } from '../typings';

export default {
  title: 'Input',
  component: Input
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
 value: 'text',
 name: 'name',
 onChange: () => {}
};

export const Error = Template.bind({});

Error.args = {
  value: '',
  name: 'name',
  error: true,
  onChange: () => {}
};

export const ErrorMessage = Template.bind({});

ErrorMessage.args = {
  value: '',
  name: 'name',
  error: true,
  errorMessage: 'Error message',
  onChange: () => {}
};


export const ErrorIcon = Template.bind({});

ErrorIcon.args = {
  value: '',
  name: 'name',
  error: true,
  errorMessage: 'Error message',
  isErrorIcon: true,
  onChange: () => {}
};