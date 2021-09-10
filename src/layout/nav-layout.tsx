import React from 'react';

import { Container, ContentWrapper, PageWrapper } from './layout.styled';
import { Navigation } from '../navigation';
import { Sidebar } from './components/sidebar';
import { Drawer } from '../drawer';
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
  isSider,
  headerTitle,
  visible,
  afterClose,
  drawerContent,
  onCancel,
  onClose,
  onOk,
  okText,
  cancelText,
  okButtonProps,
  cancelButtonProps,
  destroyOnClose,
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
          <ContentWrapper data-location='content'>{children}</ContentWrapper>
        </PageWrapper>
      </Container>
      {isSider && (
        <Drawer
          headerTitle={headerTitle}
          visible={visible}
          afterVisibleChange={afterClose}
          drawerContent={drawerContent}
          onCancel={onCancel}
          onClose={onClose}
          onOk={onOk}
          okText={okText}
          cancelText={cancelText}
          okButtonProps={okButtonProps}
          cancelButtonProps={cancelButtonProps}
          destroyOnClose={destroyOnClose}
        />
      )}
    </>
  );
};
