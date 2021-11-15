import * as React from 'react';
import styled from 'styled-components';
import { Dropdown } from '../dropdown';
import { ISelectOption } from '../typings';
import { ThemeTypes } from '../typings';

const getTimesHrs = () => {
  const times = [];
  for (let i = 1; i <= 24; i++) {
    times.push({ label: `${i}`, value: `${i}` });
  }
  return times;
};

const timePeriodData = {
  Hrs: getTimesHrs(),
  Mins: [
    { value: '15', label: '15' },
    { value: '30', label: '30' },
    { value: '45', label: '45' }
  ]
};

type timeOptions = 'Mins' | 'Hrs';

export interface ITimeDropdownProps {
  name: string;
  value: string | null;
  label?: string;
  onChange: (name: string, value: string | null) => void;
}

const getDuration = (duration: string, step: string) => {
  if (!step) {
    return null;
  }
  const time = step === 'Hrs' ? +duration * 60 : +duration;
  return `${time}`;
};

const Wrapper = (themeType: ThemeTypes) => {
  return function Component(props: ITimeDropdownProps) {
    const { name, onChange, value } = props;
    const [timeOption, setTimeOption] = React.useState('Mins');

    React.useEffect(() => {
      if (value === '') {
        setTimeOption('Mins');
      }
    }, [value]);

    const onChangeTimeOption = (v: timeOptions) => {
      setTimeOption(v);
      onChange(name, null);
    };

    const getValue = () => {
      if (!value) return null;
      let timeValue = timeOption === 'Mins' ? value : `${+value / 60}`;

      return timePeriodData[timeOption].find(
        (time: ISelectOption) => time.value === timeValue
      );
    };

    const onChangeTimeValue = (time: string) => {
      const value = getDuration(time, timeOption);
      onChange(name, value);
    };

    const DropdownC = Dropdown[themeType];

    return (
      <Container data-location="time-dropdown">
        {props.label && <Label>{props.label}</Label>}
        <TimeWrapper>
          <DropdownC
            width='60px'
            placeholder='-'
            value={getValue()}
            onChange={onChangeTimeValue}
            options={timePeriodData[timeOption]}
          />
          <Spacer />
          <DropdownC
            width='70px'
            placeholder='-'
            value={[{ value: timeOption, label: timeOption }]}
            onChange={onChangeTimeOption}
            options={[
              { value: 'Mins', label: 'Mins' },
              { value: 'Hrs', label: 'Hrs' }
            ]}
          />
        </TimeWrapper>
      </Container>
    );
  };
};

export const TimeDropdown = {
  Primary: Wrapper(ThemeTypes.Primary),
  Dark: Wrapper(ThemeTypes.Dark)
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.label`
  font-size: 12px;
  min-width: 80px;
`;

const Spacer = styled.div`
  width: 10px;
`;
const TimeWrapper = styled.div`
  display: flex;
`;
