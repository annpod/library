import React from 'react';

import { ContentHeader } from './components/content-header';
import { IContentLayout } from '../typings';

export const ContentLayout = ({
  breadcrumbsRoutes,
  breadcrumbsLastItem,
  title,
  isBreadcrumbs,
  headerContent,
  matchPath,
  withRouter,
  NavLink,
  children
}: IContentLayout) => {
  return (
    <>
      <ContentHeader
        lastItem={breadcrumbsLastItem}
        title={title}
        isBreadcrumbs={isBreadcrumbs}
        routes={breadcrumbsRoutes}
        matchPath={matchPath}
        withRouter={withRouter}
        NavLink={NavLink}
      >
        {headerContent}
      </ContentHeader>
      {children}
    </>
  );
};
