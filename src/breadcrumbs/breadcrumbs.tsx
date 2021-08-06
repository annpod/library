import React from 'react';
import styled from 'styled-components';

import { IBreadcrumbRouteMatch, IBreadcrumbs } from '../typings';
import { withBreadcrumbs } from './hoc';

interface IBreadcrumbsComponent {
  breadcrumbs: IBreadcrumbRouteMatch[];
  lastItem: string;
}

export const BreadcrumbsComponent = ({
  breadcrumbs,
  lastItem
}: IBreadcrumbsComponent) => (
  <div>
    {breadcrumbs.map(
      (item: IBreadcrumbRouteMatch, index: number) =>
        item && (
          <span key={`br-${index}`}>
            {!lastItem && index === breadcrumbs.length - 1 ? (
              <LastItem>{item.breadcrumb}</LastItem>
            ) : (
              <>
                <Link href={item.match.url}>{item.breadcrumb}</Link>
                <Arrow>{' > '}</Arrow>
              </>
            )}
          </span>
        )
    )}
    {lastItem && <LastItem>{lastItem}</LastItem>}
  </div>
);

export const Breadcrumbs = (props: IBreadcrumbs) => {
  const Breadcrumbs = withBreadcrumbs(
    props.routes,
    props.matchPath,
    props.withRouter
  )(BreadcrumbsComponent);
  return <Breadcrumbs />;
};

const LastItem = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.textColorRegular};
`;
const Link = styled.a`
  font-size: 10px;
  color: ${(props) => props.theme.textColor};
`;
const Arrow = styled.span`
  font-size: 10px;
  padding: 0 5px;
  color: ${(props) => props.theme.borderColorLight};
`;
