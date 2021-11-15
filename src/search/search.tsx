import * as React from 'react';
import styled from 'styled-components';

import { Icon } from '../icon';
import { ISearchInputProps, ThemeTypes } from '../typings';

const Wrapper = (themeType: ThemeTypes) => {
  return function SearchInput(props: ISearchInputProps) {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(props.name, event.currentTarget.value);
    };

    return (
      <SearchWrapper className={props.className}>
        <InputC
          type='text'
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChange}
          disabled={props.disabled}
          themeType={themeType}
        />
        <Icon type='search' />
      </SearchWrapper>
    );
  };
};

export const Search = {
  Primary: Wrapper(ThemeTypes.Primary),
  Dark: Wrapper(ThemeTypes.Dark)
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & img {
    position: absolute;
    left: 10px;
    top: 13px;
  }
`;
const InputC = styled.input<{ themeType: ThemeTypes }>`
  background-color: ${(props) => props.theme.numberBgColor[props.themeType]};
  border: 1px solid ${(props) => props.theme.numberBorderColor};
  color: ${(props) => props.theme.numberTextColor};
  width: 362px;
  height: 44px;
  border-radius: 5px;
  padding: 0 10px 0 35px;
  &:focus-visible {
    border: none;
    outline: none;
  }
`;
