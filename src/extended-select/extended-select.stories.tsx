import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ExtendedSelect } from './extended-select';
import { IExtendedSelectProps } from '../typings';

const options = [
  {
    label: '250, The Village',
    value: '1'
  },
  { label: 'Imported Building', value: '99' },
  {
    label: 'Building1215',
    value: '101'
  }
];

export default {
  title: 'ExtendedSelect',
  component: ExtendedSelect
} as Meta;

const Template: Story<IExtendedSelectProps> = (args) => (
  <ExtendedSelect {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  options,
  value: '1',
  clearable: true,
  searchable: true,
  // onChange: (keyValue: string, value: string) => {},
  // onChangeMulti: (keyValue: string, value: string[]) => {},
  // onChangeOption: (keyValue: string, value: string, option: string) => {},
  isAutoSelect: true,
  isMulti: false
};
