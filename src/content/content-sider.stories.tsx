import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ContentSider } from './content-sider';

export default {
  title: 'Deprecated/ContentSider',
  component: ContentSider,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: `<ContentSider>Content</ContentSider>`
      }
    }
  }
} as Meta;

const Template: Story<any> = () => <ContentSider>Content</ContentSider>;

export const Primary = Template.bind({});

