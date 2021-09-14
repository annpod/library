import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import StoryRouter from 'storybook-react-router';
import {
  NavLink,
} from 'react-router-dom';
import { PageLayout } from './page-layout';
import { IPageLayout } from '../typings';

export default {
  title: 'Layout/PageLayout',
  component: PageLayout,
  decorators: [StoryRouter()],
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<PageLayout>Page Content</PageLayout>`
      }
    }
  }
} as Meta;

const Template: Story<IPageLayout> = (args) => <PageLayout {...args} />;
export const Primary = Template.bind({});

const routeTable: {
  [key: string]: string;
} = {
  select_shard: 'SELECT_SHARD_ROUTE',
  licensing: 'LICENSING_ROUTE'
};

Primary.args = {
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
  },
  routeTable,
  selectedShard: { shardKey: '104' },
  pathname: '/systemconfiguration/shard',
  routes: [
    {
      friendlyPageName: 'Select Shard',
      icon: 'select_shard',
      id: 21,
      pathName: 'select_shard',
      title: 'Select Shard'
    },
    {
      friendlyPageName: 'Licensing Configuration',
      icon: 'licensing',
      id: 22,
      pathName: 'licensing',
      title: 'Licensing'
    }
  ],
  backButton: 'Back',
  onBack: () => {},
  children: '{children}',
  tabs: [{ title: 'Details' }, { title: 'Mapping' }],
  selectedTab: 'Details',
  onSelectTab: () => {},
  NavLink: NavLink
};
