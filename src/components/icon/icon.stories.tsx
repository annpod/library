import React from 'react';
import { Icon, IIconProps } from './icon';

import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Icon/Icon',
  component: Icon
} as Meta;

const args = {
  className: 'icon',
  size: 25,
  // type: 'reset',
  onClick: () => {}
};

export const Reset: Story<IIconProps> = () => <Icon {...args}  type={'reset'} />;
export const User: Story<IIconProps> = () => <Icon {...args}  type={'user'} />;
export const Users: Story<IIconProps> = () => <Icon {...args}  type={'users'} />;
export const UpArrow: Story<IIconProps> = () => <Icon {...args} size={10} type={'upArrow'} />
export const Settings: Story<IIconProps> = () => <Icon {...args}  type={'settings'} />;
export const Services: Story<IIconProps> = () => <Icon {...args}  type={'services'} />;
export const Resources: Story<IIconProps> = () => <Icon {...args}  type={'resources'} />;
export const ResourcesServices: Story<IIconProps> = () => <Icon {...args}  type={'resourcesServices'} />;
export const ResourcesRooms: Story<IIconProps> = () => <Icon {...args}  type={'resourcesRooms'} />;
export const ResourcesRoomTypes: Story<IIconProps> = () => <Icon {...args}  type={'resourcesRoomTypes'} />;
export const ResourcesNeighbourhood: Story<IIconProps> = () => <Icon {...args}  type={'resourcesNeighbourhoods'} />;
export const ResourcesFeatures: Story<IIconProps> = () => <Icon {...args}  type={'resourcesFeatures'} />;
export const ResourcesFacilities: Story<IIconProps> = () => <Icon {...args}  type={'resourcesFacilities'} />;
export const ResourcesDesks: Story<IIconProps> = () => <Icon {...args}  type={'resourcesDesks'} />;
export const Reporting: Story<IIconProps> = () => <Icon {...args}  type={'reporting'} />;
export const Remove: Story<IIconProps> = () => <Icon {...args}  type={'remove'} />;
export const Meetings: Story<IIconProps> = () => <Icon {...args}  type={'meetings'} />;
export const MainUpload: Story<IIconProps> = () => <Icon {...args}  type={'upload'} />;
export const Layout: Story<IIconProps> = () => <Icon {...args}  type={'layout'} />;
export const IconArrowLeft: Story<IIconProps> = () => <Icon {...args} size={10} type={'arrow_left'} />;
export const HeaderHelp: Story<IIconProps> = () => <Icon {...args}  type={'headerHelp'} />;
export const Estate: Story<IIconProps> = () => <Icon {...args}  type={'estate'} />;
export const Facilities: Story<IIconProps> = () => <Icon {...args}  type={'facilities'} />;
export const Equipment: Story<IIconProps> = () => <Icon {...args}  type={'equipment'} />;
export const DownArrow: Story<IIconProps> = () => <Icon {...args} size={10} type={'downArrow'} />;
export const Covid19: Story<IIconProps> = () => <Icon {...args}  type={'covid'} />;
export const Catering: Story<IIconProps> = () => <Icon {...args}  type={'catering'} />;
export const Bookings: Story<IIconProps> = () => <Icon {...args}  type={'bookings'} />;
export const BackArrow: Story<IIconProps> = () => <Icon {...args}  type={'backArrow'} />;
export const BackArrowRed: Story<IIconProps> = () => <Icon {...args}  type={'backArrowRed'} />;
export const BackArrowCircle: Story<IIconProps> = () => <Icon {...args}  type={'backArrowCircle'} />;






