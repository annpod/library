import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CollapseItem } from './collapse-item';
import { CollapseItemProps } from '../typings';

export default {
  title: 'V1/CollapseItem',
  component: CollapseItem,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<CollapseItem>Content</CollapseItem>`
      }
    }
  }
} as Meta;

const Template: Story<CollapseItemProps> = (args) => (
  <div style={{ width: '200px' }}>
    <CollapseItem {...args}>Content</CollapseItem>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'Where'
};
