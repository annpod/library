import * as React from 'react';
import styled from 'styled-components';

import { Icon } from '../icon';
import { IInputProps } from '../typings';

export const Input = (props: IInputProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.name, event.currentTarget.value);
  };

  return (
    <InputWrapper className={props.className}>
      <InputC
        className={props.error ? 'error' : ''}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={onChange}
        disabled={props.disabled}
        min={props.min}
        max={props.max}
      />
      {props.error && props.errorMessage && (
        <Error>
          {props.isErrorIcon && <Icon type='error' />}
          {props.errorMessage}
        </Error>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputC = styled.input<any>`
  background: ${(props) => props.theme.elementBg};
  color: ${(props) => props.theme.textColor};
  width: 362px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0 10px;
  &.error {
    border-color: ${(props) => props.theme.errorColor};
  }
  &:focus-visible {
    border: none;
    outline: none;
  }

  &[type='number'] {
    width: 60px;
  }
`;

const Error = styled.div`
  color: ${(props) => props.theme.errorColor};
  font-size: 12px;
  padding-left: 15px;
  display: flex;
  align-items: flex-end;
  img {
    margin-right: 10px;
  }
`;
