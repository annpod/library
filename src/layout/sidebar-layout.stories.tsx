import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import StoryRouter from 'storybook-react-router';
import {
  matchPath,
  withRouter,
  NavLink,
} from 'react-router-dom';
import { SidebarLayout } from './sidebar-layout';

export default {
  title: 'Layout/SidebarLayout',
  component: SidebarLayout,
  decorators: [StoryRouter()],
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<SidebarLayout>Content</SidebarLayout>`
      }
    }
  }
} as Meta;

const Template: Story<any> = (args: any) => <SidebarLayout {...args} />;
export const Primary = Template.bind({});


Primary.args = {  
  breadcrumbsRoutes: [
    { path: '/', breadcrumb: 'Library' },
  ],
  pageContent: 'pageContent',
  breadcrumbsLastItem: 'Content Layout',
  title: 'Title or Breadcrumbs',
  isBreadcrumbs: false,
  headerContent: '{headerContent}',
  matchPath: matchPath,
  withRouter: withRouter,
  NavLink: NavLink,
  children: '{children}',
  backButton: 'Back',
  onBack: () => {},
  sidebarContent: '{sidebarContent}',
  tabs: [{ title: 'Details' }, { title: 'Mapping' }],
  selectedTab: 'Details',
  onSelectTab: () => {},
};
