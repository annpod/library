import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CustomScrollbars, ICustomScrollbarsProps } from './scrollbars';

export default {
  title: 'Shared/Scrollbars',
  component: CustomScrollbars
} as Meta;

const Template: Story<ICustomScrollbarsProps> = (args) => (
  <div style={{ width: '400px' }}>
    <CustomScrollbars {...args} />
  </div>
);

export const Scrollbars = Template.bind({});

Scrollbars.args = {
  height: '150px',
  minHeight: '150px',
  children: (
    <div  style={{ paddingRight: '20px' }}>
      Storybook is a tool for UI development. It makes development faster and
      easier by isolating components. This allows you to work on one component
      at a time. You can develop entire UIs without needing to start up a
      complex dev stack, force certain data into your database, or navigate
      around your application. Use Storybook to build small atomic components
      and complex pages in your web application. If it's a UI, you can build it
      with Storybook. Storybook helps you document components for reuse and
      automatically visually test your components to prevent bugs. Extend
      Storybook with an ecosystem of addons that help you do things like fine
      tune responsive layouts or verify accessibility.
    </div>
  ),
  isScrollToBottom: false,
  flex: 1
};
