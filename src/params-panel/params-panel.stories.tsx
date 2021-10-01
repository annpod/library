import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ParamsPanel, IParamsPanelProps } from '../params-panel';

export default {
  title: 'Deprecated/ParamsPanel',
  component: ParamsPanel
} as Meta;

const Template: Story<IParamsPanelProps> = (args: any) => (
  <ParamsPanel {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  title: 'Title',
  // children: `<div>Content</div>`
};
