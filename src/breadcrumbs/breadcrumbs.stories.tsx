import React from 'react';
import styled from "styled-components";
import { Story, Meta } from '@storybook/react/types-6-0';
import { IBreadcrumbRouteMatch } from '../typings';

// copy of the component because we can't use NavLink without Router
interface IBreadcrumbsComponent {
  breadcrumbs: IBreadcrumbRouteMatch[];
  lastItem: string;
}

const Breadcrumbs = ({ breadcrumbs, lastItem }: IBreadcrumbsComponent) => {
  return (
    <div>
      {breadcrumbs.map(
        (item: IBreadcrumbRouteMatch, index: number) =>
          item && (
            <span key={`br-${index}`}>
              {!lastItem && index === breadcrumbs.length - 1 ? (
                <LastItem>{item.breadcrumb}</LastItem>
              ) : (
                <>
                  <Link className='breadcrumb'>{item.breadcrumb}</Link>
                  <Arrow>{" > "}</Arrow>
                </>
              )}
            </span>
          )
      )}
      {lastItem && <LastItem>{lastItem}</LastItem>}
    </div>
  );
};

const LastItem = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.textColorRegular};
`;
const Link = styled.span`
  font-size: 10px;
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: #1890ff;
  }
`;
const Arrow = styled.span`
  font-size: 10px;
  padding: 0 5px;
  color: ${(props) => props.theme.borderColorLight};
`;

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
    breadcrumbs,
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
        export const Breadcrumbs = ({ lastItem }) => BreadcrumbsLib({ routes, matchPath, withRouter, NavLink, lastItem });
        `
      }
    }
  }
} as Meta;

const Template: Story<any> = (args: any) => <Breadcrumbs {...args} />;

export const Primary = Template.bind({});

