import React from 'react';
import styled from 'styled-components';
import { Container } from './layout.styled';
import { Navigation } from '../navigation';
import { FullscreenHeader } from '../header';
import { PageMenu } from './page-menu';
import { ContentHeader } from './content-header';
export interface IHeaderOption {
  btn: string;
  route: string;
  order: number;
}

export interface IMenuHeader {
  headerOptions: IHeaderOption[];
  activeHeader: string;
}
export interface IHeaderProps {
  menu?: IMenuHeader;
  isProfile?: boolean;
  onLogout: () => void;
  onLogoClick?: () => void;
}

export interface ILayoutProps extends IHeaderProps {
  children: React.ReactNode;
}

export const PageLayout = ({
  routeTable,
  selectedShard,
  pathname,
  routes,
  backButton,
  onBack,
  sidebarContent,
  pageContent,
  breadcrumbsRoutes,
  breadcrumbsLastItem,
  menu,
  isProfile,
  onLogoClick,
  onLogout,
  tabs,
  selectedTab,
  onSelectTab,
  title,
  isBreadcrumbs,
  headerContent,
  matchPath,
  withRouter,
  NavLink
}: any) => {
  return (
    <>
      <FullscreenHeader
        menu={menu}
        onLogout={onLogout}
        isProfile={isProfile}
        onLogoClick={onLogoClick}
      />
      <Container>
        <Navigation
          routes={routes}
          pathname={pathname}
          selectedShard={selectedShard}
          routeTable={routeTable}
          NavLink={NavLink}
        />
        <PageMenu
          backButton={backButton}
          tabs={tabs}
          onSelectTab={onSelectTab}
          onBack={onBack}
          selectedTab={selectedTab}
        >
          {sidebarContent}
        </PageMenu>
        <ContentWrapper data-location='content'>
          <ContentHeader
            lastItem={breadcrumbsLastItem}
            title={title}
            isBreadcrumbs={isBreadcrumbs}
            routes={breadcrumbsRoutes}
            matchPath={matchPath}
            withRouter={withRouter}
            NavLink={withRouter}
          >
            {headerContent}
          </ContentHeader>
          {pageContent}
        </ContentWrapper>
      </Container>
    </>
  );
};

const ContentWrapper = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
