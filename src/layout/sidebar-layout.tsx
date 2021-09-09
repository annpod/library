import React from 'react';
// import styled from 'styled-components';
import { ContentWrapper, PageWrapper } from './layout.styled';
import { ContentHeader } from './components/content-header';
import { Sidebar } from './components/sidebar';
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

export const SidebarLayout = ({
  breadcrumbsRoutes,
  breadcrumbsLastItem,
  title,
  isBreadcrumbs,
  headerContent,
  matchPath,
  withRouter,
  NavLink,
  backButton,
  onBack,
  tabs,
  onSelectTab,
  selectedTab,
  sidebarContent,
  children
}: any) => {
  return (
    <PageWrapper>
      <Sidebar
        backButton={backButton}
        tabs={tabs}
        onSelectTab={onSelectTab}
        onBack={onBack}
        selectedTab={selectedTab}
      >
        {sidebarContent}
      </Sidebar>
      <ContentWrapper data-location='content'>
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
      </ContentWrapper>
      </PageWrapper>
  );
};
