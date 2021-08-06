import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { BreadcrumbsComponent as Breadcrumbs } from './breadcrumbs';

const breadcrumbs = [
  {
    breadcrumb: 'System Configuration',
    match: {
      isExact: true,
      params: {},
      path: '/systemconfiguration/',
      url: '/systemconfiguration'
    },

    path: '/systemconfiguration/'
  },
  {
    breadcrumb: 'User Directory',
    match: {
      isExact: true,
      params: {},
      path: '/systemconfiguration/userDirectory',
      url: '/systemconfiguration/userDirectory'
    },
    path: '/systemconfiguration/userDirectory'
  },
  {
    breadcrumb: 'Providers',
    match: {
      isExact: true,
      params: {},
      path: '/systemconfiguration/userDirectory/providers',
      url: '/systemconfiguration/userDirectory/providers'
    },
    path: '/systemconfiguration/userDirectory/providers'
  }
];

export default {
  title: 'V1/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    lastItem: 'Provider 1',
    breadcrumbs
  },
  parameters: {
    docs: {
      source: {
        code: `
        
        <Breadcrumbs lasItem="Custom Name" />

        Breadcrumbs Component:

        import { matchPath, withRouter } from "react-router-dom";
        const routes = [
          { path: ROOT_ROUTE, breadcrumb: "System Configuration" },
          { path: USER_DIRECTORY_ROUTE, breadcrumb: "User Directory" },
          { path: USER_DIRECTORY_PROVIDERS_ROUTE, breadcrumb: "Providers" },
        ];
        export const Breadcrumbs = ({ lastItem }) => BreadcrumbsLib({ lastItem, routes, matchPath, withRouter });
        `
      }
    }
  }
} as Meta;

const Template: Story<any> = (args: any) => <Breadcrumbs {...args} />;

export const Primary = Template.bind({});

