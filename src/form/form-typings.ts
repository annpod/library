import { WrappedFormUtils, ValidationRule } from 'antd/lib/form/Form';
import { ISelectOption, ICheckOption, IIconDescription } from '../typings/etc';

export interface IFormElementProps<F, V> {
  id: string;
  form: WrappedFormUtils<F>;
  label?: string;
  initialValue?: V;
  rules?: ValidationRule[];
  placeholder?: string;
  style?: any;
  disabled?: boolean;
  type?: string;
  validateTrigger?: string;
  readonly?: boolean
  errorList?: string
}

export interface IFormSelectProps<F> extends IFormElementProps<F, string> {
  options: ISelectOption[];
  onChange?: (value: string) => void;
  colorBox?: string;
}

export interface IFormIconSelectProps<F> extends IFormElementProps<F, string> {
  icons: IIconDescription[];
  onChange?: (value: string) => void;
}

export interface IFormCheckProps<F> extends IFormElementProps<F, string> {
  initialValues: string[];
  options: ICheckOption[];
}

export interface IFormTextProps<F> extends IFormElementProps<F, string> {
  rows: number;
}

export interface IFormCheckboxProps<F> extends IFormElementProps<F, boolean> {}
