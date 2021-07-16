import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ISelectOption } from '../typings';
import { Dropdown } from './dropdown';

interface IDropdownProps {
  options: ISelectOption[];
  onChange?: (value: any) => void;
  disabled?: boolean;
  value?: ISelectOption | ISelectOption[] | null | undefined;
  defaultValue?: ISelectOption | ISelectOption[] | null | undefined;
  valueRenderer?: () => React.Component | null;
  optionRenderer?: (value: any) => React.Component | null;
  placeholder?: string;
  clearable?: boolean;
  searchable?: boolean;
  width?: string;
  isMulti?: boolean;
  theme?: any;
}

export default {
  title: 'V1/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: 'Based on https://react-select.com'
      },
      source: {
        type: 'code',
        code: `<Select
        <Select
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

const Template: Story<IDropdownProps> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

export const Multi = Template.bind({});

export const Disabled = Template.bind({});

Primary.args = {
  options: [
    { value: '1', label: 'Orange' },
    { value: '2', label: 'Apple' }
  ],
  disabled: false,
  placeholder: '',
  value: { value: '1', label: 'Orange' },
  clearable: true,
  searchable: false,
  width: '200px',
  isMulti: false,
  defaultValue: { value: '1', label: 'Orange' }
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

Disabled.args = {
  options: [
    { value: '1', label: 'Orange' },
    { value: '2', label: 'Apple' }
  ],
  disabled: true,
  placeholder: '',
  value: [{ value: '1', label: 'Orange' }],
  clearable: false,
  searchable: false,
  width: '200px',
  isMulti: false,
  defaultValue: { value: '1', label: 'Orange' }
};
