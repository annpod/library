import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SubmitButton } from './submit-button';
import { ISubmitButton } from '../typings';

export default {
  title: 'Buttons/SubmitButton',
  component: SubmitButton
} as Meta;

const Template: Story<ISubmitButton> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  isDisabled: false,
  isLoading: false,
  title: 'Save'
};
