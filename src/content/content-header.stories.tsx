import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  ContentHeader as ContentHeaderC,
} from './content-header';
import { IContentHeaderProps } from '../typings';

export default {
  title: 'Layout/ContentHeader',
  component: ContentHeaderC,
  args: {
    title: 'Title'
  }
} as Meta;


export const ContentHeader = (args: IContentHeaderProps) => (
  <ContentHeaderC {...args} />
);