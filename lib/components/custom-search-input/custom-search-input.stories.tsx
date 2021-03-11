import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CustomSearchInput, IInputProps } from './search-input';

export default {
  title: 'Form/Custom Search Input',
  component: CustomSearchInput
} as Meta;

const Template: Story<IInputProps> = (args) => <CustomSearchInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: 'text',
  placeholder: 'placeholder',
  value: 'text',
  onChange: (name: string, value: string) => {},
  disabled: false
};

