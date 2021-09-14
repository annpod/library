import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import StoryRouter from 'storybook-react-router';
import { matchPath, withRouter, NavLink } from 'react-router-dom';
import { ContentLayout } from './layout-content';
import { IContentLayout } from '../typings';

export default {
  title: 'Layout/ContentLayout',
  component: ContentLayout,
  decorators: [StoryRouter()],
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<ContentLayout
                  breadcrumbsRoutes={breadcrumbsRoutes}
                  breadcrumbsLastItem={breadcrumbsLastItem}
                  title={title}
                  isBreadcrumbs={isBreadcrumbs}
                  headerContent={headerContent}
                  matchPath={matchPath}
                  withRouter={withRouter}
                  NavLink={NavLink}
                >
                  Content
                </ContentLayout>`
      }
    }
  }
} as Meta;

const Template: Story<IContentLayout> = (args) => (
  <ContentLayout {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  breadcrumbsRoutes: [{ path: '/', breadcrumb: 'Library' }],
  breadcrumbsLastItem: 'Content Layout',
  title: 'Title or Breadcrumbs',
  isBreadcrumbs: false,
  headerContent: <div>{'{headerContent}'}</div>,
  matchPath: matchPath,
  withRouter: withRouter,
  NavLink: NavLink,
  children: <div>{'{children}'}</div>
};
