import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from "styled-components";
import { ShowMoreText } from './showmore-text';
import { IShowMoreText } from '../typings';

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
  },
  argTypes: {
    more: {
      description: 'show more button',
      type: { name: 'string', required: false },
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'Show more' },
      }      
    },
    less: {
      description: 'show less button',
      type: { name: 'string', required: false },
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'Show less' },
      }      
    },
    expanded: {
      description: 'item loading state',
      type: { name: 'string', required: false },
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }      
    },
    width: {
      description: 'item loading width text',
      type: { name: 'string', required: false },
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'width of the outer container' },
      }      
    },
  },
} as Meta;
const Template: Story<IShowMoreText> = (args) => <Wrapper><ShowMoreText {...args} /></Wrapper>;

export const ShortText = Template.bind({});
export const LineText = Template.bind({});
export const WidthText = Template.bind({});

const Wrapper = styled.div`
  width: 1200px;
`;

const children = <span>Lorem Ipsum is <a href='#'>Link</a> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>;

LineText.args = {
  lines: 1,
  children,
}

WidthText.args = {
  lines: 1,
  width: 400,
  children,
}

ShortText.args = {
  children: "Lorem Ipsum"
}
