import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TabButton, ITabButtonProps } from './tab-button';

export default {
  title: 'Buttons/TabButton',
  component: TabButton
} as Meta;

const Template: Story<ITabButtonProps> = (args) => <TabButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  section: 'FirstSection',
  currentSection: 'FirstSection',
  title: 'First section',
  className: "FirstSection",
  disabled: false,
  onClick: (section: string) => {// tslint:disable-next-line:no-console
  console.log('section', section);
  },
  selected: true,
};
