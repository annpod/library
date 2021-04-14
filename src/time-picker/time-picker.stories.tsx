import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TimePicker } from './time-picker';
import { ITimePickerProps } from '../typings';

export default {
  title: 'Form/TimePicker',
  component: TimePicker,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: ` <TimePicker
                  value={startTime}
                  range={rangeStart}
                  onChange={onStartChange}
                  width={props.width}
                />`
      }
    }
  }
} as Meta;

const Template: Story<ITimePickerProps> = (args) => {
  return (
    <TimePicker {...args} />     
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
