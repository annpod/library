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
  onCancel: () => {},
  isSider: true,
  visible: true,
  siderContent: '{siderContent}',
  headerTitle: 'headerTitle'
};
