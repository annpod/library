import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import StoryRouter from 'storybook-react-router';
import {
  NavLink,
} from 'react-router-dom';
import { NavLayout } from './nav-layout';

export default {
  title: 'Layout/NavLayout',
  component: NavLayout,
  decorators: [StoryRouter()],
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<NavLayout>Page Content</NavLayout>`
      }
    }
  }
} as Meta;

const Template: Story<any> = (args: any) => <NavLayout {...args} />;
export const Primary = Template.bind({});


const Template2: Story<any> = (args: any) => <NavLayout {...args} />;
export const WithSider = Template2.bind({});


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
  children: '{children}',
  NavLink: NavLink,
  backButton: 'Back',
  onBack: () => {},
  sidebarContent: '{sidebarContent}',
  tabs: [{ title: 'Details' }, { title: 'Mapping' }],
  selectedTab: 'Details',
  onSelectTab: () => {}, 
};


WithSider.args = {
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
  children: '{children}',
  NavLink: NavLink,
  backButton: 'Back',
  onBack: () => {},
  sidebarContent: '{sidebarContent}',
  tabs: [{ title: 'Details' }, { title: 'Mapping' }],
  selectedTab: 'Details',
  onSelectTab: () => {}, 
  isModal: true,
  visible: true,
  siderContent: '{siderContent}',
  headerTitle: 'headerTitle'
};
