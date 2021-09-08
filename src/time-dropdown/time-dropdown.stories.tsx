import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TimeDropdown, ITimeDropdownProps } from './time-dropdown';

export default {
  title: 'V1/TimeDropdown',
  component: TimeDropdown.Primary
} as Meta;

const Template: Story<ITimeDropdownProps> = (args) => {
  const [value, setValue] = React.useState<{ [x: string]: string }>({
    time: '00:15:00'
  });

  const onChange = (name: string, value: string) => {
    setValue({ [name]: value });
  };

  return (
    <TimeDropdown.Primary
      {...args}
      value={value.time}
      onChange={onChange}
      name='time'
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {};
