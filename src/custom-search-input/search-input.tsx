import * as React from 'react';
import { SearchInput } from '../search-input';

import { IInputProps } from '../typings';

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
