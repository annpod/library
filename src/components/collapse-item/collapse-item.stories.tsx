import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CollapseItem, CollapseItemProps } from './collapse-item';

export default {
  title: 'Shared/CollapseItem',
  component: CollapseItem
} as Meta;

const Template: Story<CollapseItemProps> = (args) => (
  <CollapseItem {...args}>Content</CollapseItem>
);

export const Collapse = Template.bind({});

Collapse.args = {
  title: 'Where'
};
