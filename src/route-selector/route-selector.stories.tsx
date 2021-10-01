import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { RouteSelector } from './route-selector';
import { buttons, routes, selector } from './mocks';

export default {
  title: 'Deprecated/RouteSelector',
  component: RouteSelector,
  parameters: {
    docs: {
      description: {
        component: 'Use Navigation'
      }
    }
  }
} as Meta;

const Template: Story<any> = (args) => <RouteSelector {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  buttons,
  routes,
  selector,
  redirect: () => {}
};
