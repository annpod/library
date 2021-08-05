import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withBreadcrumbs } from "./hoc";
import { Breadcrumbs as BreadcrumbsC } from "./breadcrumbs";
import { IBreadcrumbRoute } from '../typings';
import { matchPath, withRouter } from 'react-router-dom';

const routes: IBreadcrumbRoute[] = [
  { path: 'ROOT_ROUTE', breadcrumb: "System Configuration" },
  { path: 'USER_DIRECTORY_ROUTE', breadcrumb: "User Directory" },
  { path: 'USER_DIRECTORY_PROVIDERS_ROUTE', breadcrumb: "Providers" },
];

export const Breadcrumbs = withBreadcrumbs(routes, matchPath, withRouter)(BreadcrumbsC);

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs
} as Meta;

const Template: Story<any> = (args: any) => <Breadcrumbs {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
  lastItem: "Name"
};
