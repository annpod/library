import React from 'react';
import styled from 'styled-components';

import { IBreadcrumbRouteMatch, IBreadcrumbs } from '../typings';
import { withBreadcrumbs } from './hoc';

interface IBreadcrumbsComponent {
  breadcrumbs: IBreadcrumbRouteMatch[];
  lastItem: string;
  NavLink: any;
}

export const BreadcrumbsComponent = ({
  breadcrumbs,
  NavLink,
  lastItem
}: IBreadcrumbsComponent) => {
  return (
    <div data-location='breadcrumbs'>
      {breadcrumbs.map(
        (item: IBreadcrumbRouteMatch, index: number) =>
          item && (
            <span key={`br-${index}`}>
              {!lastItem && index === breadcrumbs.length - 1 ? (
                <LastItem>{item.breadcrumb}</LastItem>
              ) : (
                <>
                  <NavLink to={item.match.url} className='breadcrumb'>
                    {item.breadcrumb}
                  </NavLink>
                  <Arrow>{' > '}</Arrow>
                </>
              )}
            </span>
          )
      )}
      {lastItem && <LastItem>{lastItem}</LastItem>}
    </div>
  );
};

export const Breadcrumbs = (props: IBreadcrumbs) => {
  const Breadcrumbs = withBreadcrumbs(
    props.routes,
    props.matchPath,
    props.withRouter,
    props.NavLink,
    props.lastItem
  )(BreadcrumbsComponent);
  return <Breadcrumbs />;
};

const LastItem = styled.div`
  font-size: 18px;
  font-family: 'Gotham-Book';
  color: ${(props) => props.theme.textColorRegular};
`;
const Arrow = styled.span`
  font-size: 10px;
  padding: 0 5px;
  color: ${(props) => props.theme.borderColorLight};
`;
