import React from 'react';
import styled from "styled-components";
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonStyled, IProps } from './buttons';

export default {
  title: 'Buttons/V1/ButtonStyled',
  component: ButtonStyled.Dark
} as Meta;

const Template1: Story<IProps> = (args) => <Wrapper>
  <ButtonStyled.Primary {...args}>{args.children}</ButtonStyled.Primary>
</Wrapper>;

export const Primary = Template1.bind({});

Primary.args = {
  disabled: false,
  children: 'Close',
  onClick: () => { }
};

const Template2: Story<IProps> = (args) => <Wrapper>
  <ButtonStyled.Dark {...args}>{args.children}</ButtonStyled.Dark>
</Wrapper>;

export const Dark = Template2.bind({});

Dark.args = {
  disabled: false,
  children: 'Close',
  onClick: () => { }
};
const Template3: Story<IProps> = (args) => <Wrapper>
  <ButtonStyled.Light {...args}>{args.children}</ButtonStyled.Light>
</Wrapper>;

export const Light = Template3.bind({});

Light.args = {
  disabled: false,
  children: 'Close',
  onClick: () => { }
};
const Template4: Story<IProps> = (args) => <Wrapper>
  <ButtonStyled.Blue {...args}>{args.children}</ButtonStyled.Blue>
</Wrapper>;

export const Blue = Template4.bind({});

Blue.args = {
  disabled: false,
  children: 'Close',
  onClick: () => { }
};

const Wrapper = styled.div`
  display: flex;
`;