import * as React from 'react';

import { findSelectOption, findSelectOptions } from '../utils/select.utils';

import { IExtendedDropdown } from '../typings';
import { Dropdown } from '../dropdown';



export const ExtendedDropdown = (props: IExtendedDropdown) => {
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

  const DropdownC = Dropdown[props.themeType];

  return (
    <DropdownC
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
