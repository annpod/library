import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SubmitButton, ISubmitButton } from '../components/button/submit-button';

export default {
  title: 'Example/Button',
  component: SubmitButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ISubmitButton> = (args) => <SubmitButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isDisabled: false,
  isLoading: true,
  title: 'Save'
};

export const Secondary = Template.bind({});
Secondary.args = {
  isDisabled: false,
  isLoading: true,
  title: 'Save'
};


