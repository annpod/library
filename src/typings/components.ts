import React, { ReactNode } from 'react';
import { ISelectOption } from './etc';
import moment from 'moment';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { RadioChangeEvent } from 'antd/lib/radio';
import { InputTypes, IThemeMap } from '../typings';
import { WrapperType, ThemeTypes } from './enum';

export interface IExportButton {
  disabled: boolean;
  children: string;
  onClick: () => void;
}

export interface ISubmitButton {
  isDisabled: boolean;
  isLoading: boolean;
  children?: string | React.ReactElement;
  onClick: () => void;
}

export interface CollapseItemProps {
  title: string;
}

export interface IContentHeaderProps {
  title: string;
}

export interface IInputProps {
  placeholder?: string;
  name: string;
  className?: string;
  type?: string;
  value?: string;
  error?: boolean;
  errorMessage?: string;
  isErrorIcon?: boolean;
  disabled?: boolean;
  min?: string;
  max?: string;
  onChange: (name: string, value: string) => void;
}

export interface ISearchInputProps {
  placeholder?: string;
  name: string;
  className?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  onChange: (name: string, value: string) => void;
}

export interface IInputsProps extends IInputProps {
  isError?: boolean;
  large?: boolean;
  label?: string;
  labelRight?: boolean;
  labelWidth?: string;
  inputType?: InputTypes;
  step?: string;
}

export interface IDatePickerProps {
  label?: string;
  placeholder: string;
  value?: moment.Moment | null;
  onChange?: (value: string) => void;
  onChangeMoment?: (value: moment.Moment | null) => void;
  minDate: moment.Moment;
  maxDate: moment.Moment;
  allowClear: boolean;
  isDisabled?: boolean;
}

export interface IExtendedSelectOption {
  keyValue: string;
  value: any;
  options: ISelectOption[];
  placeholder: string;
  isDisabled?: boolean;
  optionValue?: string;
}

export interface IExtendedSelectProps extends IExtendedSelectOption {
  clearable?: boolean;
  searchable?: boolean;
  onChange?: (keyValue: string, value: string) => void;
  onChangeMulti?: (keyValue: string, value: string[]) => void;
  onChangeOption?: (keyValue: string, value: string, option: string) => void;
  isAutoSelect?: boolean;
  isMulti?: boolean;
}

export interface IModalButton {
  label: string;
  onClick: () => void;
}

export interface IModalHeader {
  type?: string;
  headerTitle: string;
  theme?: any;
  confirmButton: IModalButton | null;
  cancelButton: IModalButton;
}

export interface IModal extends IModalHeader {
  visible: boolean;
  children: string | React.ReactElement;
  afterClose?: () => void;
}

export interface IDialogueFooter {
  confirmButton: IModalButton | null;
  cancelButton: IModalButton;
}

export interface IDialogue extends IDialogueFooter {
  className?: string;
  closable?: boolean;
  headerTitle?: string;
  confirmButton: IModalButton | null;
  cancelButton: IModalButton;
  visible: boolean;
  children: string | React.ReactElement;
  afterClose?: () => void;
}

export interface IDrawer {
  visible: boolean;
  children: React.ReactChild;
  onCancel?: () => void;
  onClose?: () => void;
  headerTitle?: string | null;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
  okButtonProps?: { disabled: boolean };
  cancelButtonProps?: { disabled: boolean };
}

export interface IPaginationProps {
  current: number;
  setCurrentPage: (props: any) => void;
  defaultPageSize: number;
  total: number;
}

export interface ICustomScrollbarsProps {
  height?: string;
  minHeight?: string;
  children: React.ReactNode;
  style?: any;
  isScrollToBottom?: boolean;
  flex?: number | string;
}

export interface IStatusSelect {
  isNewDesk: boolean;
  // deskName?: string;
  form: any;
  initialValue: any;
  id: any;
  label: any;
  rules: any;
  disabled: any;
  placeholder: any;
  onChangeStatus: any;
}

export interface ITabButtonProps {
  section: string;
  currentSection?: string;
  title: string;
  className?: string;
  disabled?: boolean;
  onClick: (section: string) => void;
  selected?: boolean;
}

export interface IIconTextTabButtonProps extends ITabButtonProps {
  icon: ReactNode;
}

export interface ITimeRangePickerProps {
  options: {
    startLabel: string;
    endLabel: string;
    timeStart: Date;
    timeEnd: Date;
    placeholder?: string;
  };
  someProps: {
    start: string;
    end: string;
  };
  onChange?: (value: any) => void;
  width?: string;
}

export interface ISwitchProps {
  loading?: boolean;
  disabled?: boolean;
  checkedChildren?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  unCheckedChildren?: boolean;
  onChange?: (checked: boolean, event: Event) => void;
  onClick?: (checked: boolean, event: Event) => void;
}

export interface IRadioGroupOption {
  key: string;
  name: string;
  tooltip?: string | null;
}

export interface IRadioGroupProps {
  options: IRadioGroupOption[];
  value: string;
  name: string;
  isButton?: boolean;
  onChange: (e: RadioChangeEvent) => void;
}

export interface ICheckboxGroupOption {
  key: string;
  name: string;
  rightSideValue?: string;
}

export interface ICheckboxGroupProps {
  name: string;
  options: ICheckboxGroupOption[];
  value: CheckboxValueType[];
  onChange: (checkedValues: CheckboxValueType[]) => void;
}

export interface IDropdownTypes {
  options: ISelectOption[];
  onChange?: (value: any) => void;
  disabled?: boolean;
  value?: ISelectOption | ISelectOption[] | null | undefined;
  defaultValue?: ISelectOption | ISelectOption[] | null | undefined;
  valueRenderer?: () => React.Component | null;
  optionRenderer?: (value: any) => React.Component | null;
  placeholder?: string;
  clearable?: boolean;
  searchable?: boolean;
  width?: string;
  isMulti?: boolean;
  theme: IThemeMap;
}

export interface IBreadcrumbs {
  routes: IBreadcrumbRoute[];
  matchPath: any;
  withRouter: any;
  NavLink: any;
  lastItem?: string;
}

export interface IBreadcrumbRoute {
  path: string;
  breadcrumb: string;
}

export interface IBreadcrumbRouteMatch extends IBreadcrumbRoute {
  path: string;
  breadcrumb: string;
  match: any;
}

export interface IShowMoreText {
  children: React.ReactChild;
  width?: number;
  lines?: number;
  more?: string;
  less?: string;
  expanded?: boolean;
}

export interface IBreadcrumbsRoute {
  path: string;
  breadcrumb: string;
}

export interface IEditButtonProps {
  itemCountString: string | null;
  resetKeys: () => void;
  onClick: () => void;
  enabled: boolean;
}

export interface ITab {
  to?: string;
  title: string;
}

export interface IRoute {
  id: number;
  pathName: string;
  title: string;
  icon: string;
  friendlyPageName: string;
}

export interface INavigation {
  routes: IRoute[];
  pathname: string;
  selectedShard?: { shardKey: string };
  routeTable: { [key: string]: string };
  NavLink: any;
}

export interface IWrapper {
  mleft?: string | boolean;
  mright?: string | boolean;
  mtop?: string | boolean;
  mbottom?: string | boolean;
  pleft?: string | boolean;
  pright?: string | boolean;
  ptop?: string | boolean;
  pbottom?: string | boolean;
  size: WrapperType;
}

export interface IExtendedDropdown extends IExtendedSelectProps {
  themeType: ThemeTypes;
}
