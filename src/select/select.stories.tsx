import React, { forwardRef, useImperativeHandle } from 'react';
import Form from 'antd/lib/form/Form';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ISelectOption } from '../typings/etc';
import { Select } from '../select';

interface ISelectProps {
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
}

export default {
  title: 'Form/Select',
  component: Select,
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

const Template: Story<ISelectProps> = (args) => <Select {...args} />;

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

