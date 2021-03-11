import * as React from 'react';

import { FormItemBox, SimpleTextArea } from '../form.styled';
import { IFormTextProps } from '../form-typings';

export const FormText = <F extends {}>(props: IFormTextProps<F>) => (
  <FormItemBox label={props.label}>
    {props.form.getFieldDecorator(props.id, {
      initialValue: props.initialValue || undefined,
      rules: props.rules,
    })(
      <SimpleTextArea
        rows={props.rows}
        disabled={props.disabled}
        readOnly={props.readonly}
        placeholder={props.placeholder}
      />
    )}
  </FormItemBox>
);
