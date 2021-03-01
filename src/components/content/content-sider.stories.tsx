import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ContentSider } from './content-sider';

export default {
  title: 'Content/Sider',
  component: ContentSider
} as Meta;

const Template: Story<any> = () => <ContentSider >Content</ContentSider>;

export const Sider = Template.bind({});

