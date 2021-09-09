import React from 'react';
// import styled from 'styled-components';

import { ContentHeader } from './components/content-header';

// export interface IHeaderOption {
//   btn: string;
//   route: string;
//   order: number;
// }

// export interface IMenuHeader {
//   headerOptions: IHeaderOption[];
//   activeHeader: string;
// }
// export interface IHeaderProps {
//   menu?: IMenuHeader;
//   isProfile?: boolean;
//   onLogout: () => void;
//   onLogoClick?: () => void;
// }

// export interface ILayoutProps extends IHeaderProps {
//   children: React.ReactNode;
// }

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
}: any) => {
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
