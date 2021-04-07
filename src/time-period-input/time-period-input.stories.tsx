import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TimePeriodInput, ITimePeriodInputProps } from './time-period-input';
import { ITimePeriod } from './time-period-input.typings';

export default {
  title: 'Form/TimePeriodInput',
  component: TimePeriodInput,
  parameters: {
    docs: {
      source: {
        description: {
          component: 'Based on https://ant.design/components/select/',
        },
        code: `<TimePeriodInput
        someProps={
          props.initialValue
            ? props.initialValue
            : { amount: 0, units: 'Minutes' }
        }
        timePeriodData={props.timePeriodData}
      />`
      }
    }
  }

} as Meta;

const Template: Story<ITimePeriodInputProps> = (args) => (
  <TimePeriodInput {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  timePeriodData: {
    Days: ['0', '1', '2', '3', '4', '5', '6', '7'],
    Hours: [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23'
    ],
    Minutes: ['0', '15', '30', '45']
  },
  someProps: {
    amount: 2,
    units: 'Hours'
  },
  onChange: (value: ITimePeriod) => {}
};
