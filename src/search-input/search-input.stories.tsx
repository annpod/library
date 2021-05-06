import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SearchInput } from './search-input';

export default {
  title: 'SearchInput',
  component: SearchInput
} as Meta;

const Template: Story<any> = (args) => <SearchInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
 value: 'search text',
 style: {},
};


export const Error = Template.bind({});

Error.args = {
  value: '',
  style: { border: '1px solid red' },
};