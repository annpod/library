import React from 'react';
import styled from 'styled-components';
import { InputTypes, IInputsProps } from '../typings';
import { Icon } from '../icon';

export const Wrapper = (inputType: InputTypes) => (props: IInputsProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(props.name, event.currentTarget.value);
  };

  return (
    <InputWrapper className={props.className}>
      <FieldLabel>
        {props.label && (
          <Label labelRight={props.labelRight} labelWidth={props.labelWidth}>
            {props.label}
          </Label>
        )}
        <InputC
          className={props.isError ? 'error' : ''}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={onChange}
          disabled={props.disabled}
          min={props.min}
          max={props.max}
          inputType={inputType}
          large={props.large}
        />
      </FieldLabel>
      {props.isError && props.errorMessage && (
        <Error>
          {props.isErrorIcon && <Icon type='error' />}
          {props.errorMessage}
        </Error>
      )}
    </InputWrapper>
  );
};

const FieldLabel = styled.label`
  display: flex;
  align-items: center;
`;

const InputC = styled.input<any>`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.inputs[props.inputType].disabledBg
      : props.theme.inputs[props.inputType].background};
  color: ${(props) => props.theme.inputs[props.inputType].color};
  border-color: ${(props) => props.theme.inputs[props.inputType].borderColor};
  width: ${(props) => (props.large ? '362px' : '100%')};
  height: 36px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  padding: 0 10px;
  margin: 5px 0 5px;
  &.error {
    border-color: ${(props) => props.theme.errorColor};
  }
  &:focus-visible {
    outline: none;
  }

  &[type='number'] {
    width: 60px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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

const Label = styled.div<any>`
  font-family: Gotham-Medium;
  display: flex;
  margin-right: 20px;
  justify-content: ${(props) => (props.labelRight ? 'flex-end' : 'flex-start')};
  width: ${(props) => props.labelWidth || 'auto'};
`;

export const InputStyled = {
  Primary: Wrapper(InputTypes.Primary),
  Dark: Wrapper(InputTypes.Dark)
};
