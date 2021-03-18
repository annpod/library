import * as React from 'react';

import { Select } from '../select';

import { createTimeOptions } from './time-picker.utils';

import { ISelectOption, IRange } from '../typings/etc';

export interface ITimePickerProps {
  range: IRange<Date>;
  value: string;
  onChange: (value: any) => any;
  placeholder?: string;
  width?: string;
}

export const TimePicker = (props: ITimePickerProps) => {
  const options = createTimeOptions(props.range);

  return (
    <Select
      value={options.find((x: ISelectOption) => x.value === props.value)}
      options={options}
      onChange={props.onChange}
      placeholder={props.placeholder}
      width={props.width}
    />
  );
};
