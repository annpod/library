import { differenceInMinutes, addMinutes, format } from 'date-fns';

import { HOUR_FORMAT, HOUR_FORMAT_PICKER } from '../../constants/date';

import { IRange } from '../../typings/etc';

export function createTimeOptions(range: IRange<Date>) {
  const diff = differenceInMinutes(range.end, range.start) / 15;
  let time = range.start;
  const options = [createTimeOption(time)];
  for (let i = 0; i < diff; i++) {
    time = addMinutes(time, 15);
    options.push(createTimeOption(time));
  }

  return options;
}

function createTimeOption(time: Date) {
  return {
    value: format(time, HOUR_FORMAT),
    label: format(time, HOUR_FORMAT_PICKER),
  };
}
