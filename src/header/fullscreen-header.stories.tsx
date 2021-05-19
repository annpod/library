import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FullscreenHeader } from './fullscreen-header';
import { IHeaderProps } from '../typings';

export default {
  title: 'FullscreenHeader',
  component: FullscreenHeader,
  args: {
    isProfile: true,
    onLogoClick: () => {},
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
        code: `<FullscreenHeader 
                menu={menu}
                isProfile: true,
                onLogoClick: () => {},
                onLogout={() => {}}
               />`
      }
    }
  }
} as Meta;

const Template: Story<IHeaderProps> = (args) => <FullscreenHeader {...args} />;

export const Fullscreen = Template.bind({});
