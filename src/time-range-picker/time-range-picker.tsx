import * as React from 'react';
import { addMinutes } from 'date-fns';
import styled from 'styled-components';

import { createDateFromHours } from '../utils/date-utils';

import { TimePicker } from '../time-picker';
import { ITimeRangePickerProps } from '../typings';

const Wrapper = styled.div`
  display: flex;
  line-height: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-weight: 300;
  margin-bottom: 5px;
`;

const TimePickerWrapper = styled.div`
  width: 110px;
`;

const Divider = styled.div`
  margin: 0 10px;
  width: 10px;
  height: 10px;
  align-self: center;

  &:after {
    content: '_';
  }
`;

const endDayTime = '1.00:00:00';
const startDayTime = '00:00:00';
const endCurrentDay = '23:59:59';

export const TimeRangePicker = React.forwardRef<
  HTMLDivElement,
  ITimeRangePickerProps
>((props, ref) => {
  const [startTime, setStartTime] = React.useState(props.someProps.start);
  const [endTime, setEndTime] = React.useState(
    props.someProps.end === endCurrentDay ? endDayTime : props.someProps.end
  );
  const [rangeStart, setRangeStart] = React.useState({
    start: props.options.timeStart,
    end: addMinutes(createDateFromHours(props.someProps.end), -15),
  });
  const [rangeEnd, setRangeEnd] = React.useState({
    start: addMinutes(createDateFromHours(props.someProps.start), 15),
    end: props.options.timeEnd,
  });
  
  const onStartChange = (start: string) => {
    setStartTime(start);
    setRangeEnd({
      ...rangeEnd,
      start: addMinutes(createDateFromHours(start), 15),
    });
    props.onChange &&
      props.onChange({
        end: endTime,
        start,
      });
  };

  const onEndChange = (end: string) => {
    if (end === startDayTime) {
      end = endDayTime;
    }
    setEndTime(end);
    setRangeStart({
      ...rangeStart,
      end: addMinutes(createDateFromHours(end), -15),
    });
    props.onChange &&
      props.onChange({
        start: startTime,
        end,
      });
  };

  return (
    <Wrapper ref={ref}>
      <Item>
        <Label>{props.options.startLabel}</Label>
        <TimePickerWrapper>
          <TimePicker
            value={startTime}
            range={rangeStart}
            onChange={onStartChange}
            width={props.width}
          />
        </TimePickerWrapper>
      </Item>
      <Divider />
      <Item>
        <Label>{props.options.endLabel}</Label>
        <TimePickerWrapper>
          <TimePicker
            value={endTime === endDayTime ? startDayTime : endTime}
            range={rangeEnd}
            onChange={onEndChange}
            width={props.width}
          />
        </TimePickerWrapper>
      </Item>
    </Wrapper>
  );
});
