import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import StoryRouter from 'storybook-react-router';
import {
  matchPath,
  withRouter,
  NavLink,
} from 'react-router-dom';
import { ContentLayout } from './content-layout';

export default {
  title: 'Layout/ContentLayout',
  component: ContentLayout,
  decorators: [StoryRouter()],
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<ContentLayout>Content</ContentLayout>`
      }
    }
  }
} as Meta;

const Template: Story<any> = (args: any) => <ContentLayout {...args} />;
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
};
