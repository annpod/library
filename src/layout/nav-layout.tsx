import React from 'react';

import { Container, ContentWrapper, PageWrapper } from './layout.styled';
import { Navigation } from '../navigation';
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

export const NavLayout = ({
  routeTable,
  selectedShard,
  pathname,
  routes,
  NavLink,
  backButton,
  onBack,
  tabs,
  onSelectTab,
  selectedTab,
  sidebarContent,
  children,
}: any) => {
  return (
    <>
      <Container>
        <Navigation
          routes={routes}
          pathname={pathname}
          selectedShard={selectedShard}
          routeTable={routeTable}
          NavLink={NavLink}
        />
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
            {children}
          </ContentWrapper>
        </PageWrapper>
      </Container>
    </>
  );
};
