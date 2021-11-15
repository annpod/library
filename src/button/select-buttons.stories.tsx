import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SelectButton, ISelectProps } from './select-buttons';

export default {
  title: 'Buttons/SelectButton',
  component: SelectButton.Primary,
  parameters: {
    docs: {
      source: {
        code: `<SelectButton.Primary
        disabled={false}
        onClick={() => {}}>
    Provider
  </SelectButton.Primary>
  `
      }
    }
  }
} as Meta;

const Template1: Story<ISelectProps> = (args) => (
  <Wrapper>
    <SelectButton.Primary {...args}>{args.children}</SelectButton.Primary>
  </Wrapper>
);

export const Primary = Template1.bind({});

Primary.args = {
  disabled: false,
  children: 'Provider',
  onClick: () => {}
};

const Wrapper = styled.div`
  display: flex;
`;
