import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Select } from '../select';
import { TimePicker, ITimePickerProps } from './time-picker';
import { createTimeOptions } from './time-picker.utils';
import { ISelectOption } from '../typings/etc';

export default {
  title: 'Form/TimePicker',
  component: TimePicker,
  parameters: {
    docs: {
      source: {
        code: `<TimePicker>
        <Select
          value={options.find((x: ISelectOption) => x.value === args.value)}
          options={options}
          onChange={onChange}
          placeholder={args.placeholder}
          width={width}
        />
      </TimePicker>`
      }
    }
  }
} as Meta;

const Template: Story<ITimePickerProps> = (args) => {
  const options = createTimeOptions(args.range);
  return (
    <TimePicker {...args}>
      <Select
        value={options.find((x: ISelectOption) => x.value === args.value)}
        options={options}
        onChange={args.onChange}
        placeholder={args.placeholder}
        width={args.width}
      />
    </TimePicker>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  range: {
    end: new Date(
      'Thu Feb 25 2021 23:44:59 GMT+0200 (Eastern European Standard Time)'
    ),
    start: new Date(
      'Thu Feb 25 2021 00:00:00 GMT+0200 (Eastern European Standard Time)'
    )
  },
  value: '08:00:00',
  onChange: (value: any) => {},
  placeholder: 'HH:MM',
  width: '110px'
};
