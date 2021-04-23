import React from 'react';
import moment from 'moment';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Datepicker } from './date-picker';
import { IDatePickerProps } from '../typings';

export default {
  title: 'Form/Datepicker',
  component: Datepicker,
  parameters: {
    docs: {
      description: {
        component: 'Based on https://ant.design/components/date-picker/',
      },
    }
  },
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
