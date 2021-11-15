import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Select, IProps } from '../select';
import styled from 'styled-components';


export default {
  title: 'Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Based on https://react-select.com'
      },
      source: {
        type: 'code',
        code: `<Select
          disabled={isDisabled}
          clearable={clearable}
          searchable={searchable}
          placeholder={placeholder}
          options={options}
          value={searchOption}
          onChange={handleSelectChange}
          isMulti={isMulti}
      />`
      }
    }
  }
} as Meta;

const Template: Story<IProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

export const Multi = Template.bind({});

Primary.args = {
  options: [
    { value: '1', label: 'Orange' },
    { value: '2', label: 'Apple' }
  ],
  disabled: false,
  placeholder: '',
  value: { value: '1', label: 'Orange' },
  clearable: false,
  searchable: false,
  width: '200px',
  isMulti: false,
  defaultValue: { value: '1', label: 'Orange' },
  menuPlacement: 'top',
};

Multi.args = {
  options: [
    { value: '1', label: 'Orange' },
    { value: '2', label: 'Apple' }
  ],
  disabled: false,
  placeholder: '',
  value: [{ value: '1', label: 'Orange' }],
  clearable: false,
  searchable: false,
  width: '200px',
  isMulti: true,
  defaultValue: { value: '1', label: 'Orange' }
};
