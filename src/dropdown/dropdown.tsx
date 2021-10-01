import * as React from 'react';
import ReactSelect from 'react-select';
import { ISelectOption, IDropdownTypes, ThemeTypes } from '../typings';
import { DropdownIndicator } from './dropdown-indicator';
import { ClearIndicator } from './dropdown-clear-indicator';
import { withTheme } from 'styled-components';
import { dropdownStyles } from './dropdown.styles';

const Wrapper = (themeType: ThemeTypes) =>
  withTheme((props: IDropdownTypes) => {
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
      theme,
      key
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

    const widthStyle = width ? width : '100%';

    return (
      <ReactSelect
        styles={dropdownStyles(widthStyle, theme, themeType)}
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
        key={key}
      />
    );
  });

export const Dropdown = {
  Primary: Wrapper(ThemeTypes.Primary),
  Dark: Wrapper(ThemeTypes.Dark)
};
