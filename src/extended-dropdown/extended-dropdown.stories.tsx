import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ExtendedDropdown } from './extended-dropdown';
import { IExtendedDropdown, ThemeTypes } from '../typings';

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
  title: 'V1/ExtendedDropdown',
  component: ExtendedDropdown
} as Meta;

const Template: Story<IExtendedDropdown> = (args) => (
  <ExtendedDropdown {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  options,
  value: '1',
  clearable: true,
  searchable: true,
  themeType: ThemeTypes.Primary,
  // onChange: (keyValue: string, value: string) => {},
  // onChangeMulti: (keyValue: string, value: string[]) => {},
  // onChangeOption: (keyValue: string, value: string, option: string) => {},
  isAutoSelect: true,
  isMulti: false,
};
