import { IBreadcrumbsRoute } from './components';

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

export interface INavLayout {
  routeTable?: { [key: string]: string };
  selectedShard?: { shardKey: string };
  pathname?: string;
  routes?: any;
  NavLink?: any;
  backButton?: string;
  onBack?: () => void;
  tabs?: any;
  onSelectTab?: (tab: string) => void;
  selectedTab?: string;
  sidebarContent?: React.ReactChildren;
  children: React.ReactNode;

}

export interface IContentLayout {
  breadcrumbsRoutes?: IBreadcrumbsRoute[];
  breadcrumbsLastItem?: string;
  title?: string;
  isBreadcrumbs?: boolean;
  headerContent?: React.ReactChildren;
  matchPath?: any;
  withRouter?: any;
  NavLink?: any;
  children: React.ReactChildren;
}
