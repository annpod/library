import React from 'react';
import moment from 'moment';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Datepicker, IDatePickerProps } from './date-picker';


export default {
  title: 'Form/Datepicker',
  component: Datepicker
} as Meta;

const Template: Story<IDatePickerProps> = (args) => <Datepicker {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Label",
  placeholder: "placeholder",
  value: moment('2020-01-01'),
  onChange: (value: string) => {},
  onChangeMoment: (value: moment.Moment | null) => {},
  minDate: moment('2020-01-01'),
  maxDate: moment('2020-02-01'),
  allowClear: true,
  isDisabled: false
};
