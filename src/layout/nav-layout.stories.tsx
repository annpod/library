import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import StoryRouter from 'storybook-react-router';
import { NavLink } from 'react-router-dom';
import { NavLayout } from './nav-layout';
import { INavLayout } from '../typings';

export default {
  title: 'Layout/NavLayout',
  component: NavLayout,
  decorators: [StoryRouter()],
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<NavLayoutLib
                routeTable={routeTable}
                selectedShard={selectedShard}
                pathname={pathname}
                routes={routes}
                backButton={backButton}
                onBack={onBack}
                sidebarContent={sidebarContent}
                tabs={tabs}
                selectedTab={selectedTab}
                onSelectTab={onSelectTab}
                NavLink={NavLink}
              >
                Content
              </NavLayoutLib>`
      }
    }
  }
} as Meta;

const Template: Story<INavLayout> = (args) => <NavLayout {...args} />;
export const Primary = Template.bind({});

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
  tabs: [{ title: 'Details' }, { title: 'Mapping' }],
  selectedTab: 'Details',
  onSelectTab: () => {}
};
