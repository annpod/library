import React from 'react';

import { Container, ContentWrapper } from './layout.styled';
import { Navigation } from '../navigation';
import { FullscreenHeader } from '../header';
import { Sidebar } from './components/sidebar';

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
  menu,
  isProfile,
  onLogoClick,
  onLogout,
  tabs,
  selectedTab,
  onSelectTab,
  NavLink,
  children
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
        <Sidebar
          backButton={backButton}
          tabs={tabs}
          onSelectTab={onSelectTab}
          onBack={onBack}
          selectedTab={selectedTab}
        >
          {sidebarContent}
        </Sidebar>
        <ContentWrapper data-location='content'>{children}</ContentWrapper>
      </Container>
    </>
  );
};
