import { WrappedFormUtils, ValidationRule } from 'antd/lib/form/Form';
import { ISelectOption, ICheckOption, IIconDescription } from './etc';
import { MenuPlacement } from 'react-select';
export interface ITimePeriod {
  amount: number;
  units: string;
}

export interface ITimePeriodUnit {
  key: string;
  name: string;
}

export interface ITimePeriodData {
  unitList: ITimePeriodUnit[];
  value: ITimePeriod;
}

export interface ITimePeriodInputProps {
  timePeriodData: IFormTimePeriodData;
  someProps: ITimePeriod;
  onChange?: (value: ITimePeriod) => void;
}

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
  readonly?: boolean;
  errorList?: string;
  isHideError?: boolean;
}

export interface IFormSelectProps<F> extends IFormElementProps<F, string> {
  options: ISelectOption[];
  menuPlacement?: MenuPlacement;
  onChange?: (value: string) => void;
  colorBox?: string;
  onOpen?: () => void;
  onClose?: () => void;
  ref?: any;
}

export interface IFormIconSelectProps<F> extends IFormElementProps<F, string> {
  icons: IIconDescription[];
  iconsUrl?: string;
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

export interface IFormNumberProps<F> extends IFormElementProps<F, number> {
  min?: number;
  max?: number;
}

export interface IAutoCompleteOption {
  text: string;
  value: string;
}

export interface IAutoComplete {
  data: Array<{ text: string; value: string }>;
  isHideError?: boolean;
  onSearch?: (x: string) => void;
  onSelect?: (x: any) => void;
}

export interface IFormAmountProps<F> extends IFormElementProps<F, number> {
  onChange: (name: string, value: string) => void;
  width?: string;
}

export interface ISelectProps extends IFormSelectProps<{}> {
  value?: string;
  options: ISelectOption[];
  menuPlacement?: MenuPlacement;
  onChange?: (value: string) => void;
  colorBox?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface IFormTimePeriodData {
  Days: string[];
  Hours: string[];
  Minutes: string[];
  [index: string]: any;
}

export interface IFormTimePeriodProps<F>
  extends IFormElementProps<F, ITimePeriod> {
  timePeriodData: IFormTimePeriodData;
}
