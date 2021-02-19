export interface IHashMap<T> {
  [key: string]: T;
}

export interface ISelectOption {
  [key: string]: string;
  value: string;
  label: string;
}

export interface IIconDescription {
  key: string;
  url: string;
}

export interface ICheckOption extends ISelectOption {}

export interface IDictionaryOption {
  key: string;
  name: string;
  regionKey?: string;
}

export interface IRange<T> {
  start: T;
  end: T;
}

export enum FormState {
  Add = 1,
  Edit,
}

export enum ToastStatus {
  error = 'error',
  info = 'info',
  warn = 'warn',
  success = 'success',
}
