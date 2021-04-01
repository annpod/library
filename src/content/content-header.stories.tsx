import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ContentHeader, IContentHeaderProps } from './content-header';

export default {
  title: 'Layout/Header',
  component: ContentHeader
} as Meta;

const Template: Story<IContentHeaderProps> = (args) => <ContentHeader {...args} />;

export const Header = Template.bind({});

Header.args = {
  title: 'Title',
};
