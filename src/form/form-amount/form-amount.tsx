import * as React from 'react';

import { MAX_INT32_VALUE } from '../../constants/config';

import { FormItemBox, AmountInput } from '../form.styled';
import { IFormElementProps } from '../form-typings';

import 'antd/lib/input-number/style/css';

export interface IFormAmountProps<F> extends IFormElementProps<F, number> {
  min?: number;
  max?: number;
}

export const FormAmount = <F extends {}>(props: IFormAmountProps<F>) => {

return (
  <FormItemBox label={props.label}>
    {props.form.getFieldDecorator(props.id, {
      initialValue: props.initialValue || undefined,
      rules: props.rules,
    })(
      <AmountInput
        autoComplete={props.id}
        min={props.min || 0}
        max={props.max || MAX_INT32_VALUE}
        precision={0}
        placeholder={props.placeholder}
      />
    )}
  </FormItemBox>
)};
