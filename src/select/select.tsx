import * as React from 'react';
import ReactSelect, { MenuPlacement } from 'react-select';
import { ISelectOption } from '../typings';

export interface IProps {
  options: ISelectOption[];
  onChange?: (value: any) => void;
  onOpen?: () => void;
  onClose?: () => void;
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
  menuPlacement?: MenuPlacement;
}

export const Select = React.memo((props: IProps) => {
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
    menuPlacement,
    valueRenderer,
    optionRenderer,
    onChange,
    onOpen,
    onClose,
  } = props;
  
  const onChangeSelect = (option: any) => {
    if (!onChange) {
      return;
    }    
    let value;
    if (isMulti) {
      value = option && option.length
          ? option.map((item: ISelectOption) => item.value)
          : [];
    } else {
      value = option ? option.value : '';
    }
    onChange(value);
  };

  return (
    <ReactSelect
      styles={selectStyles(width ? width : '215px')}
      onBlurResetsInput={false}
      onSelectResetsInput={false}
      autoFocus={false}
      options={options}
      onChange={onChangeSelect}
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
      menuPlacement={menuPlacement}
      onMenuOpen={onOpen}
      onMenuClose={onClose}
    />
  );
});

// TODO: update with theme
export const selectStyles = (width: string): any => ({
  control: (provided: React.CSSProperties) => ({
    ...provided,
    width,
    border: '1px solid #CCCCCC',
    borderRadius: '5px',
    fontWeight: 400,
    fontSize: '13px',
    '&:hover': {
      border: '1px solid #CCCCCC',
    },
  }),
  valueContainer: (s: React.CSSProperties) => ({
    ...s,
    minHeight: '28px',
    padding: '0 8px',
    transform: 'translateY(-1px)',
    caretColor: 'transparent',
  }),
  singleValue: (s: React.CSSProperties) => ({
    ...s,
    color: 'rgba(0, 0, 0, 0.65)',
  }),
  multiValue: (s: React.CSSProperties) => ({
    ...s,
    maxWidth: '90%',
  }),
  input: (s: React.CSSProperties) => ({
    ...s,
    padding: '0 12px',
  }),
  placeholder: (s: React.CSSProperties) => ({
    ...s,
    color: '#444448',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (s: React.CSSProperties) => ({
    ...s,
    padding: '8px 0 0',
    minHeight: '30px',
    height: '30px',
  }),
  clearIndicator: (s: React.CSSProperties) => ({
    ...s,
    padding: '0',
  }),
  dropdownIndicator: (provided: React.CSSProperties) => ({
    ...provided,
    color: '#565559',
    '&:hover': {
      color: '##565559',
    },
  }),
  menu: (provided: React.CSSProperties) => ({
    ...provided,
    fontWeight: 400,
    fontSize: '13px',
  }),
});
