import React from 'react';
import { Icon, IIconProps } from './icon';

import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Icon/Logo',
  component: Icon
} as Meta;

const args = {
  className: 'icon',
  size: 25,
  // type: 'reset',
  onClick: () => {}
};

export const SmartSpace: Story<IIconProps> = () => <Icon {...args} size={150} type={'smartspace'} />;
export const SCBLogo: Story<IIconProps> = () => <Icon {...args}  size={150}  type={'scbLogo'} />;
export const BTLogo: Story<IIconProps> = () => <Icon {...args}  size={35} type={'btLogo'} />;






