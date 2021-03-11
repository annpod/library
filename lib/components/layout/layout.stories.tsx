import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Layout, ILayoutProps } from './layout';

export default {
  title: 'Example/Layout',
  component: Layout,  
} as Meta;

const Template: Story<ILayoutProps> = (args) => <Layout {...args} />;

export const PageLayout = Template.bind({});
PageLayout.args = {
  children: <div>Page Content</div>,
};


