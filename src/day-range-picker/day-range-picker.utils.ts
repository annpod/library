import { IHashMap, IRange } from 'typings/etc';

interface IMark {
  label: string;
  value: number;
}

const WORKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const STEP = 100 / (WORKDAYS.length - 1);

function createMarks(): IHashMap<IMark> {
  return WORKDAYS.reduce((marks: IHashMap<IMark>, label, value) => {
    marks[`${value * STEP}`] = {
      value,
      label,
    };
    return marks;
  }, {});
}

export const DAY_MARKS = createMarks();

export const getRangeValue = (range: IRange<number>): [number, number] => {
  const start =
    Object.keys(DAY_MARKS).find(
      (key) => DAY_MARKS[key].value === range.start
    ) || '0';
  const end =
    Object.keys(DAY_MARKS).find((key) => DAY_MARKS[key].value === range.end) ||
    '0';

  return [+start, +end];
};
