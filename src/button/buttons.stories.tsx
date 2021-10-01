import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonStyled, IProps } from './buttons';

export default {
  title: 'Buttons/ButtonStyled',
  component: ButtonStyled.Dark,
  parameters: {
    docs: {
      source: {
        code: `<ButtonStyled.Primary
  disabled: false,
  onClick: () => {}
  >
    Close
  </ButtonStyled.Primary>
  `
      },
      description: {
        component: 'Use LocationDropdown'
      }
    }
  }
} as Meta;

const Template1: Story<IProps> = (args) => (
  <Wrapper>
    <ButtonStyled.Primary {...args}>{args.children}</ButtonStyled.Primary>
  </Wrapper>
);

export const Primary = Template1.bind({});

Primary.args = {
  disabled: false,
  children: 'Close',
  onClick: () => {}
};

const Template2: Story<IProps> = (args) => (
  <Wrapper>
    <ButtonStyled.Dark {...args}>{args.children}</ButtonStyled.Dark>
  </Wrapper>
);

export const Dark = Template2.bind({});

Dark.args = {
  disabled: false,
  children: 'Close',
  onClick: () => {}
};
const Template3: Story<IProps> = (args) => (
  <Wrapper>
    <ButtonStyled.Light {...args}>{args.children}</ButtonStyled.Light>
  </Wrapper>
);

export const Light = Template3.bind({});

Light.args = {
  disabled: false,
  children: 'Close',
  onClick: () => {}
};
const Template4: Story<IProps> = (args) => (
  <Wrapper>
    <ButtonStyled.Blue {...args}>{args.children}</ButtonStyled.Blue>
  </Wrapper>
);

export const Blue = Template4.bind({});

Blue.args = {
  disabled: false,
  children: 'Close',
  onClick: () => {}
};

export const PrimarySlim = Template1.bind({});

PrimarySlim.args = {
  disabled: false,
  children: 'Close',
  slim: true,
  onClick: () => {}
};

const Template5: Story<IProps> = (args) => (
  <Wrapper>
    <ButtonStyled.Small {...args}>{args.children}</ButtonStyled.Small>
  </Wrapper>
);

export const Small = Template5.bind({});

Small.args = {
  disabled: false,
  children: 'Clear',
  onClick: () => {}
};

const Template6: Story<IProps> = (args) => (
  <Wrapper>
    <ButtonStyled.Grey {...args}>{args.children}</ButtonStyled.Grey>
  </Wrapper>
);

export const Grey = Template6.bind({});

Grey.args = {
  disabled: false,
  children: 'Close',
  onClick: () => {}
};

const Template7: Story<IProps> = (args) => (
  <Wrapper>
    <ButtonStyled.Cancel {...args}>{args.children}</ButtonStyled.Cancel>
  </Wrapper>
);

export const Cancel = Template7.bind({});

Cancel.args = {
  disabled: false,
  children: 'Close',
  onClick: () => {}
};

const Wrapper = styled.div`
  display: flex;
`;
