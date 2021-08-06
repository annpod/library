import React from 'react';
import { IBreadcrumbRoute, IBreadcrumbRouteMatch } from '../typings';

interface IGetBreadcrumbs {
  routes: IBreadcrumbRoute[];
  pathname: string;
  matchPath: any;
}

const renderer = ({ breadcrumb, match }: any) => {
  console.log(" breadcrumb, match",  breadcrumb, match)
  if (typeof breadcrumb === 'function') {
    return breadcrumb({ match });
  }
  return breadcrumb;
};

export const getBreadcrumbs = ({
  pathname,
  routes,
  matchPath
}: IGetBreadcrumbs) => {
  const matches: IBreadcrumbRouteMatch[] = [];
  pathname
    .replace(/\/$/, '')
    .split('/')
    .reduce((previous: string, current: string) => {
      const pathSection = `${previous}/${current}`;
      let breadcrumbMatch;
      routes.some(({ breadcrumb, path }: IBreadcrumbRoute) => {
        const match = matchPath(pathSection, { exact: true, path });
        if (match) {
          breadcrumbMatch = {
            breadcrumb: renderer({ breadcrumb, match }),
            path,
            match
          };
          return true;
        }
        return false;
      });
      if (breadcrumbMatch) {
        matches.push(breadcrumbMatch);
      }
      return pathSection;
    });
  return matches;
};

export const withBreadcrumbs = (
  routes: IBreadcrumbRoute[],
  matchPath: any,
  withRouter: any
) => (Component: React.ComponentType<any>) => {
  return withRouter((props: any) => (
    <Component
      {...props}
      breadcrumbs={getBreadcrumbs({
        pathname: props.location.pathname,
        routes,
        matchPath
      })}
    />
  ));
};
