import React from 'react';
import { IFormCheckboxProps } from '../form-typings';
import { FormItemBox, CheckboxCustom } from '../form.styled';

export const FormCheckbox = <F extends {}>(props: IFormCheckboxProps<F>) => (
  <FormItemBox>
    {props.form.getFieldDecorator(props.id, {
      rules: props.rules,
      initialValue: props.initialValue,
      valuePropName: 'value',
    })(
      <CheckboxCustom defaultChecked={props.initialValue}>
        {props.label}
      </CheckboxCustom>
    )}
  </FormItemBox>
);
