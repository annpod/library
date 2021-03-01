import * as React from 'react';
import { SearchInput } from '../search-input';

export interface IInputProps {
  placeholder: string;
  name: string;
  type?: string;
  value?: string;
  error?: boolean;
  disabled?: boolean;
  onChange: (name: string, value: string) => void;
}

export const CustomSearchInput = (props: IInputProps) => {

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.name, event.currentTarget.value);
  };

  return (
    <SearchInput
      style={props.error ? { border: '1px solid red' } : {}}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleSearchChange}
      disabled={props.disabled}
    />
  );
};
