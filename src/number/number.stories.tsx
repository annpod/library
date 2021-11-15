import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Number, INumberProps } from './number';

export default {
  title: 'V1/Number',
  component: Number.Primary
} as Meta;

const Template: Story<INumberProps> = (args) => {
  const [value, setValue] = React.useState<string>();

  const onChange = (name: string, value: string) => {
    setValue(value);
  };

  return <Number.Primary {...args} onChange={onChange} value={value} />;
};

export const Primary = Template.bind({});

Primary.args = {
  name: 'primary',
  min: '-5',
  max: '5',
  label: 'Primary'
};
