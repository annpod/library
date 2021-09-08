import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Switch } from './switch';
import { ISwitchProps } from '../typings';

export default {
  title: 'V1/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'Based on https://ant.design/components/switch/'
      }
    }
  }
} as Meta;

const Template: Story<ISwitchProps> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  loading: false,
  disabled: false,
  checkedChildren: false,
  defaultChecked: false,
  unCheckedChildren: false,
  onChange: (checked: boolean, event: Event) => {console.log("onChange", checked)},
  onClick: (checked: boolean, event: Event) => {console.log("onClick", checked)}
};
