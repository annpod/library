import * as React from 'react';
import styled from 'styled-components';
import { Dropdown } from '../dropdown';
import { ISelectOption } from '../typings';
import { ThemeTypes } from '../typings';

const getTimesHrs = () => {
  const times = [];

  for (let i = 1; i <= 24; i++) {
    const paddedTime = i.toString().padStart(2, '0');
    const value = `${paddedTime}:00:00`;
    times.push({ label: i, value });
  }
  return times;
};

const getTimeMins = () => [
  { label: '00', value: '00:00:00' },
  { label: '15', value: '00:15:00' },
  { label: '30', value: '00:30:00' },
  { label: '45', value: '00:45:00' }
];

const timePeriodData = {
  Mins: getTimeMins(),
  Hrs: getTimesHrs()
};

type timeOptions = 'Mins' | 'Hrs';

export interface ITimeDropdownProps {
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
}

const Wrapper = (themeType: ThemeTypes) => {
  return function Component(props: ITimeDropdownProps) {
    const { name, onChange, value } = props;
    const [timeOption, setTimeOption] = React.useState('Mins');

    const onChangeTimeOption = (v: timeOptions) => {
      setTimeOption(v);
    };

    const onChangeTimeValue = (time: string) => {
      onChange(name, time);
    };

    const DropdownC = Dropdown[themeType];

    return (
      <Container>
        <DropdownC
          width='65px'
          placeholder='-'
          value={timePeriodData[timeOption].find(
            (time: ISelectOption) => time.value === value
          )}
          onChange={onChangeTimeValue}
          options={timePeriodData[timeOption]}
        />
        <Spacer />
        <DropdownC
          width='75px'
          placeholder='-'
          value={[{ value: timeOption, label: timeOption }]}
          onChange={onChangeTimeOption}
          options={[
            { value: 'Mins', label: 'Mins' },
            { value: 'Hrs', label: 'Hrs' }
          ]}
        />
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
`;

const Spacer = styled.div`
  width: 10px;
`;
