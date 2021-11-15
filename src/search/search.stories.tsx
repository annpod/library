import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Search } from './search';
import { ISearchInputProps } from '../typings';

export default {
  title: 'V1/Search',
  component: Search.Primary,
  parameters: {
    docs: {
      source: {
        code: `<SearchInput.Primary
    value="text"
    placeholder="placeholder"
    type="text"
    onChange={() => {}}
    />
  `
      }
    }
  }
} as Meta;

const Template1: Story<ISearchInputProps> = (args) => (
  <Search.Primary {...args} />
);

export const Primary = Template1.bind({});

Primary.args = {
  value: 'text',
  name: 'search',
  onChange: () => {}
};

const Template2: Story<ISearchInputProps> = (args) => <Search.Dark {...args} />;

export const Dark = Template2.bind({});

Dark.args = {
  value: 'text',
  name: 'search',
  onChange: () => {}
};
