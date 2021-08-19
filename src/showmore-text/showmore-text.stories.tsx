import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from "styled-components";
import { ShowMoreText } from './showmore-text';
import { IShowMoreText } from '../typings'

export default {
  title: 'V1/ShowMoreText',
  component: ShowMoreText,
  parameters: {
    source: {
      type: 'code',
      code: `<ShowMoreText>
      lines={1}
      more="Show more"
      less="Show less"
      expanded={false}
      width={400}
      </ShowMoreText>
      `
    }
  }
} as Meta;

const Template: Story<IShowMoreText> = (args) => <Wrapper><ShowMoreText {...args} /></Wrapper>;

export const ShortText = Template.bind({});
export const LineText = Template.bind({});
export const WidthText = Template.bind({});
export const FloatText = Template.bind({});

const Wrapper = styled.div`
  width: 1200px;
`;

const children = <span>Lorem Ipsum is <a href='#'>Link</a> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>;

LineText.args = {
  lines: 2,
  children,
  expanded: false,
}

WidthText.args = {
  lines: 1,
  width: 400,
  children,
}

ShortText.args = {
  children: "Lorem Ipsum"
}

FloatText.args = {
  floatLine: true,
  children,
}