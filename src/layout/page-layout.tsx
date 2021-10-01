import React from 'react';

import { Container, ContentWrapper, PageWrapper } from './layout.styled';
import { Navigation } from '../navigation';
import { FullscreenHeader } from '../header';
import { Sidebar } from './components/sidebar';
import { IPageLayout } from '../typings';

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

export const PageLayout = ({
  routeTable,
  selectedShard,
  pathname,
  routes,
  backButton,
  onBack,
  sidebarContent,
  menu,
  isProfile,
  onLogoClick,
  onLogout,
  tabs,
  isExternalMenu,
  selectedTab,
  onSelectTab,
  NavLink,
  children
}: IPageLayout) => {
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
        <PageWrapper data-location='content-wrapper'>
          <Sidebar
            backButton={backButton}
            tabs={tabs}
            onSelectTab={onSelectTab}
            onBack={onBack}
            selectedTab={selectedTab}
            isExternalMenu={isExternalMenu}
            NavLink={NavLink}
          >
            {sidebarContent}
          </Sidebar>
          <ContentWrapper data-location='content'>{children}</ContentWrapper>
        </PageWrapper>
      </Container>
    </>
  );
};
