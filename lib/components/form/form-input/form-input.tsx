import * as React from 'react';

import {
  FormItemBox,
  SimpleInput,
  Block,
  Title,
  InputCustom,
  ErrorText,
} from '../form.styled';
import { IFormElementProps } from '../form-typings';

export const FormInput = <F extends {}>(
  props: IFormElementProps<F, string>
) => {
  return (
    <FormItemBox
      {...props.errorList && {
        help: props.errorList,
        validateStatus: 'error',
      }}
      label={props.label}
      style={props.style}
    >
      {props.form.getFieldDecorator(props.id, {
        initialValue: props.initialValue || undefined,
        rules: props.rules,
        validateTrigger: props.validateTrigger,
      })(
        <SimpleInput
          type={props.type ? props.type : 'text'}
          style={props.style}
          min={0}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readonly}
        />
      )}
    </FormItemBox>
  );
};

export const FormInputNoAnt = <F extends {}>(
  props: IFormElementProps<F, string>
) => {
  const errors = props.form.getFieldError(props.id);
  return (
    <Block>
      {props.form.getFieldDecorator(props.id, {
        initialValue: props.initialValue || undefined,
        rules: props.rules,
        validateTrigger: props.validateTrigger,
      })(
        <Block>
          <Title>{props.label}</Title>
          <InputCustom
            type={props.type ? props.type : 'text'}
            style={props.style}
            min={0}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readOnly={props.readonly}
            defaultValue={props.initialValue}
          />
          {props.errorList && <ErrorText>{props.errorList}</ErrorText>}
          {errors && errors.map((el) => <ErrorText>{el}</ErrorText>)}
        </Block>
      )}
    </Block>
  );
};
