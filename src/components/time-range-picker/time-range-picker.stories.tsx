import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { startOfToday, startOfTomorrow } from 'date-fns';

import { TimeRangePicker, ITimeRangePickerProps } from './time-range-picker';

export default {
  title: 'Form/TimeRangePicker',
  component: TimeRangePicker
} as Meta;

const Template: Story<ITimeRangePickerProps> = (args) => (
  <TimeRangePicker {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  options: {
    endLabel: 'End Time',
    placeholder: 'HH:MM',
    startLabel: 'Start Time',
    timeStart: startOfToday(),
    timeEnd: startOfTomorrow()
  },
  someProps: {
    start: '00:00:00',
    end: '23:00:00'
  },
  onChange: (value: any) => {},
  width: '110px'
};
