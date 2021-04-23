import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Layout } from './layout';
import { ILayoutProps } from '../typings';

export default {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<Layout>Page Content</Layout>`
      }
    }
  }
} as Meta;

const Template: Story<ILayoutProps> = (args) => <Layout {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: <div>Page Content</div>,
  onLogout: () => {},
  isProfile: true,
  menu: {
    activeHeader: 'Administration',
    headerOptions: [
      { btn: 'Desks', route: '/deskbooking/', order: 2 },
      { btn: 'Meetings', route: '/roombooking/', order: 1 },
      { btn: 'Display', route: '/display/settings/', order: 3 },
      {
        btn: 'Administration',
        route: 'https://ssdev.platformcluster.connectib.com/administration',
        order: 4
      }
    ]
  }
};
