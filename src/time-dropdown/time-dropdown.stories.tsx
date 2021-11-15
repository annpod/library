import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { TimeDropdown, ITimeDropdownProps } from './time-dropdown';

export default {
  title: 'V1/TimeDropdown',
  component: TimeDropdown.Primary,
  parameters: {
    docs: {
      description: {
        component: `To reset timeOption to "Mins", pass empty value, e.g. value = ""`
      },
      source: {
        code: `
          <TimeDropdown.Primary
            name:'setUpTime',
            label: 'Set-Up Time',
            value={value.time}
            onChange={onChange}
        />
        `
      }
    }
  }
} as Meta;

const Template: Story<ITimeDropdownProps> = (args) => {
  const [value, setValue] = React.useState<{ [x: string]: string | null }>({
    time: '15'
  });

  const onChange = (name: string, value: string | null) => {
    setValue({ [name]: value });
  };

  return (
    <Wrapper>
      <TimeDropdown.Primary {...args} value={value.time} onChange={onChange} />
    </Wrapper>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  name: 'setUpTime',
  label: 'Set-Up Time'
};

const Wrapper = styled.div`
  width: 240px;
`;
