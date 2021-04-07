import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  UsersIcon,
  EstateIcon,
  ResourcesIcon,
  ReportingIcon,
  SettingsIcon,
  BookingsIcon,
  CovidIcon,
  UploadIcon,
  MeetingsIcon
} from './route-selector.icons';

export const Template = (args: any) => {
  return (
    <>
      <UsersIcon /> <span> UsersIcon </span>
      <br />
      <EstateIcon />
      <br />

      <ResourcesIcon />
      <br />
      <ReportingIcon />
      <br />
      <SettingsIcon />
      <br />
      <BookingsIcon />
      <br />
      <CovidIcon />
      <br />
      <UploadIcon />
      <br />
      <MeetingsIcon />
      <br />

    </>
  );
};

export const Users = Template.bind({});

export default {
  title: 'ResourcesIcons',
  component: Template
} as Meta;

// const Template: Story<any> = (args) => { return  <UsersIcon />};
// export const Users = Template.bind({});

// const Template2: Story<any> = (args) => { return  <EstateIcon />};

// export const Estate = Template2.bind({});
