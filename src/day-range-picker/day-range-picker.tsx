import * as React from 'react';

import { DaySlider } from './day-range-picker.styled';
import { DAY_MARKS, STEP, getRangeValue } from './day-range-picker.utils';

import { IDayRangePickerProps } from '../typings/etc';

export const DayRangePicker = (props: IDayRangePickerProps) => {
  const onChange = (range: any) => {
    props.onChange({
      start: DAY_MARKS[range[0]].value,
      end: DAY_MARKS[range[1]].value,
    });
  };

  return (
    <DaySlider
      range={true}
      marks={DAY_MARKS}
      step={STEP}
      value={getRangeValue(props.value)}
      onChange={onChange}
      tipFormatter={null}
    />
  );
};
