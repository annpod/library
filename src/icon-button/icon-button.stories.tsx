import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon } from '../icon';
import { IconButton, IIconButtonProps } from './icon-button';

export default {
  title: 'Icon/IconButton',
  component: IconButton
} as Meta;

const Template: Story<IIconButtonProps> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  className: "resources-tab-button sc-iQNlJl cZijcP",
  icon: <Icon type="reset" size={25} />, 
  title:"Reset",
   disabled: false,
   onClick: ()=> {}
};

