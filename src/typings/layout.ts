import React from 'react';
import { IBreadcrumbsRoute, INavigation } from './components';

export interface IHeaderProps {
  menu?: IMenuHeader;
  isProfile?: boolean;
  onLogout: () => void;
  onLogoClick?: () => void;
}

export interface IHeaderOption {
  btn: string;
  route: string;
  order: number;
}

export interface IMenuHeader {
  headerOptions: IHeaderOption[];
  activeHeader: string;
}

export interface ILayoutProps extends IHeaderProps {
  children: React.ReactNode;
}

export interface IFocusViewLayout {
  title?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  onClose: () => void;
}

export interface INavLayout extends INavigation {
  backButton?: string;
  onBack?: () => void;
  tabs?: { title: string, to?: string }[];
  onSelectTab?: (tab: string) => void;
  selectedTab?: string;
  isExternalMenu?: boolean;
  sidebarContent?: React.ReactElement;
  children: React.ReactNode;
}

export interface IContentLayout {
  breadcrumbsRoutes?: IBreadcrumbsRoute[];
  breadcrumbsLastItem?: string;
  title?: string;
  isBreadcrumbs?: boolean;
  headerContent?: React.ReactElement;
  matchPath?: any;
  withRouter?: any;
  NavLink?: any;
  children: React.ReactNode;
}

export interface IPageLayout extends INavLayout {  
  menu?: IMenuHeader;
  isProfile?: boolean;
  onLogout: () => void;
  onLogoClick?: () => void;
}