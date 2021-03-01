import * as React from 'react';
import { Select } from '../../select';

import {
  FormItemBox,
} from '../form.styled';
import { IFormSelectProps } from '../form-typings';
import { ISelectOption } from '../../../typings/etc';

export const FormSelect = <F extends {}>(props: IFormSelectProps<F>) => {
  return (
    <FormItemBox label={props.label}>
      {props.form.getFieldDecorator(props.id, {
        initialValue: props.initialValue || undefined,
        rules: props.rules,
        validateTrigger: props.validateTrigger,
      })(<TempSelect {...props} />)}
    </FormItemBox>
  );
};

interface ISelectProps extends IFormSelectProps<{}> {
  value?: string;
  options: ISelectOption[];
}

const TempSelect = ({ value: v2, ...props }: ISelectProps) => {
  const options = props.options.map(el => ({ ...el, key: el.value }));
  const value = options.find(el => el.value === v2);

  return <Select
    {...props}
    options={options}
    isMulti={false}
    width={'100%'}
    value={value}
  />;
};
