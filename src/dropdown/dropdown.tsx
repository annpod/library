import * as React from 'react';
import ReactSelect from 'react-select';
import { ISelectOption, IThemeMap } from '../typings';
import { DropdownIndicator } from './dropdown-indicator';
import { ClearIndicator } from './dropdown-clear-indicator';
import { withTheme } from 'styled-components';
import { dropdownStyles } from './dropdown.styles';

interface IProps {
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

const DropdownC = React.memo((props: IProps) => {
  const {
    options,
    disabled,
    placeholder,
    value,
    clearable,
    searchable,
    width,
    isMulti,
    defaultValue,
    valueRenderer,
    optionRenderer,
    onChange,
    theme
  } = props;

  const onDropdownChange = (option: any) => {
    if (!onChange) {
      return;
    }
    let value;
    if (isMulti) {
      value =
        option && option.length
          ? option.map((item: ISelectOption) => item.value)
          : [];
    } else {
      value = option ? option.value : '';
    }
    onChange(value);
  };

  return (
    <ReactSelect
      styles={dropdownStyles(width ? width : '215px', theme)}
      components={{
        DropdownIndicator,
        ClearIndicator
      }}
      onBlurResetsInput={false}
      onSelectResetsInput={false}
      autoFocus={false}
      menuPortal={true}
      options={options}
      onChange={onDropdownChange}
      isDisabled={disabled}
      clearable={false}
      value={value || null}
      valueRenderer={valueRenderer}
      placeholder={placeholder}
      optionRenderer={optionRenderer}
      isClearable={clearable}
      isSearchable={searchable}
      isMulti={!!isMulti}
      defaultValue={defaultValue}
    />
  );
});

export const Dropdown = withTheme(DropdownC);
