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
routeTable: any;
selectedShard: any;
pathname: any;
routes: any;
NavLink: any;
backButton: string;
onBack?: () => void;
tabs: any;
onSelectTab?: (tab: string) => void;
selectedTab?: () => void;
sidebarContent: string | React.ReactElement;
children: React.ReactNode;
isDrawer?: boolean;
}