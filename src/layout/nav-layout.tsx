import React from 'react';

import { Container, ContentWrapper, PageWrapper, Wrapper } from './layout.styled';
import { Navigation } from '../navigation';
import { Sidebar } from './components/sidebar';
import { Drawer } from '../drawer';
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
  children,
  isDrawer,
  headerTitle,
  visible,
  drawerContent,
  onCancel,
  onClose,
  onOk,
  okText,
  cancelText,
  okButtonProps,
  cancelButtonProps,
  afterVisibleChange,
}: INavLayout) => {
  return (
    <Wrapper data-location='page-wrapper'>
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
          >
            {sidebarContent}
          </Sidebar>
          <ContentWrapper data-location='content'>{children}</ContentWrapper>
         
        </PageWrapper>
      </Container>
      {isDrawer && (
        <Drawer
          headerTitle={headerTitle}
          visible={visible}
          drawerContent={drawerContent}
          onCancel={onCancel}
          onClose={onClose}
          onOk={onOk}
          okText={okText}
          cancelText={cancelText}
          okButtonProps={okButtonProps}
          cancelButtonProps={cancelButtonProps}
          afterVisibleChange={afterVisibleChange}
        />
      )}
    </Wrapper>
  );
};
