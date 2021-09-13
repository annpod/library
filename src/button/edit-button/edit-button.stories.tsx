import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { EditButton } from './edit-button';

export default {
  title: 'Buttons/EditButton',
  component: EditButton
} as Meta;

const Template: Story<any> = (args) => <EditButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  itemCountString: 'Edit 2 Items',
  resetKeys: () => {},
  onClick: () => {},
};
