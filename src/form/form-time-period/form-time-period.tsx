import * as React from 'react';
import { IFormTimePeriodProps } from '../../typings/form';
import { TimePeriodInput } from '../../time-period-input';
import { FormItemBox } from '../form.styled';

export const FormTimePeriod = <F extends {}>(
  props: IFormTimePeriodProps<F>
) => (
  <FormItemBox label={props.label}>
    {props.form.getFieldDecorator(props.id, {
      initialValue: props.initialValue,
      rules: props.rules
    })(
      <TimePeriodInput
        someProps={
          props.initialValue
            ? props.initialValue
            : { amount: 0, units: 'Minutes' }
        }
        timePeriodData={props.timePeriodData}
      />
    )}
  </FormItemBox>
);
