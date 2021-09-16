import React from 'react';

import {
  Container,
  ContentWrapper,
  PageWrapper,
  Wrapper
} from './layout.styled';
import { Navigation } from '../navigation';
import { Sidebar } from './components/sidebar';
import { INavLayout } from '../typings';

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
  isSelectedShard,
  children
}: INavLayout) => {
  return (
    <Wrapper data-location='page-wrapper'>
      <Container>
        <Navigation
          routes={routes}
          pathname={pathname}
          selectedShard={selectedShard}
          isSelectedShard={isSelectedShard}
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
          >
            {sidebarContent}
          </Sidebar>
          <ContentWrapper data-location='content'>{children}</ContentWrapper>
        </PageWrapper>
      </Container>
    </Wrapper>
  );
};
