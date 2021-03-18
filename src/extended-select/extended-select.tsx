import * as React from 'react';

import { Select } from '../select';
import { findSelectOption, findSelectOptions } from '../utils/select.utils';
export interface ISelectOption {
  [key: string]: string;
  value: string;
  label: string;
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

export const ExtendedSelect = (props: IExtendedSelectProps) => {
  const searchOption = Array.isArray(props.value)
    ? findSelectOptions(props.value, props.options)
    : findSelectOption(props.value, props.options);

  const handleSelectChange = (value: string | string[]) => {
    if (Array.isArray(value)) {
      if (props.onChangeMulti) {
        props.onChangeMulti(props.keyValue, value);
      }
      return;
    }
    if (props.optionValue && props.onChangeOption) {
      return props.onChangeOption(props.keyValue, value, props.optionValue);
    }
    props.onChange && props.onChange(props.keyValue, value);
  };

  React.useEffect(() => {
    if (props.isAutoSelect) {
      if (props.options.length === 1 && !props.value)
        handleSelectChange(props.options[0].value);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.options, props.isAutoSelect, props.value]);

  return (
    <Select
      disabled={props.isDisabled}
      clearable={props.clearable}
      searchable={props.searchable}
      placeholder={props.placeholder}
      options={props.options}
      value={searchOption}
      onChange={handleSelectChange}
      isMulti={!!props.isMulti}
    />
  );
};
