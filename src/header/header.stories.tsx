import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Header } from './header';
import { IHeaderProps } from '../typings';

export default {
  title: 'Layout/Header',
  component: Header,
  args: {
    onLogout: () => {},
    menu: {
      activeHeader: 'Administration',
      headerOptions: [
        { btn: 'Desks', route: '/deskbooking/', order: 2 },
        { btn: 'Meetings', route: '/roombooking/', order: 1 },
        { btn: 'Display', route: '/display/settings/', order: 3 },
        {
          btn: 'Administration',
          route: 'https://ssdev.platformcluster.connectib.com/administration',
          order: 5
        }
      ]
    }
  },
  parameters: {
    docs: {
      source: {
        code: `<Header 
                menu={menu}
                onLogout={() => {}}
               />`
      }
    }
  }
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
