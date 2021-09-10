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
  visible: boolean;
  drawerContent: string | React.ReactElement;
  afterVisibleChange?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
  type?: string;
  headerTitle: string;
  theme?: any;
  onOk?: () => void;
  okText: string;
  cancelText: string;
  okButtonProps: any;
  cancelButtonProps: any;
  routeTable: { [key: string]: string };
  selectedShard: { shardKey: string };
  pathname: string;
  routes: any;
  NavLink: any;
  backButton: string;
  onBack?: () => void;
  tabs: any;
  onSelectTab?: (tab: string) => void;
  selectedTab: string;
  sidebarContent: React.ReactChildren;
  children: React.ReactNode;
  isDrawer?: boolean;
}

export interface IContentLayout {
  breadcrumbsRoutes: IBreadcrumbsRoute;
  breadcrumbsLastItem: string;
  title: string;
  isBreadcrumbs: boolean;
  headerContent: React.ReactChildren;
  matchPath: any;
  withRouter: any;
  NavLink: any;
  children: React.ReactChildren;
}
