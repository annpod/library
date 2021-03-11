import * as React from 'react';
import { IFormElementProps } from '../form-typings';
import {
  ITimePeriod,
  TimePeriodInput,
} from '../../time-period-input';
import { FormItemBox } from '../form.styled';
export interface ITimePeriodData {
  Days: string[];
  Hours: string[];
  Minutes: string[];
  [index: string]: any;
}
export interface IFormTimePeriodProps<F>
  extends IFormElementProps<F, ITimePeriod> {
  timePeriodData: ITimePeriodData;
}

export const FormTimePeriod = <F extends {}>(
  props: IFormTimePeriodProps<F>
) => (
  <FormItemBox label={props.label}>
    {props.form.getFieldDecorator(props.id, {
      initialValue: props.initialValue,
      rules: props.rules,
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
