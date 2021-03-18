import * as React from 'react';

import { FormItemBox } from '../form.styled';
import { IFormCheckProps } from '../form-typings';
import CheckboxGroup from 'antd/lib/checkbox/Group';
import 'antd/lib/checkbox/style/css';

export const FormCheck = <F extends {}>(props: IFormCheckProps<F>) => (
  <FormItemBox label={props.label}>
    {props.form.getFieldDecorator(props.id, {
      rules: props.rules,
      initialValue: props.initialValues,
      valuePropName: 'value',
    })(<CheckboxGroup options={props.options} />)}
  </FormItemBox>
);
