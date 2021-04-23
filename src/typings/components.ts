import React, { ReactNode } from 'react';
import { ISelectOption } from './etc';
import moment from 'moment';

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
  placeholder: string;
  name: string;
  type?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (name: string, value: string) => void;
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
  selected?: boolean
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

