import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

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

export const Icons = (args: any) => {
  return (
    <>
      <ExampleIcon>
        <UsersIcon />
        <Code> {'<UsersIcon />'} </Code>
      </ExampleIcon>
      <ExampleIcon>
        <EstateIcon />
        <Code> {'<EstateIcon />'} </Code>
      </ExampleIcon>
      <ExampleIcon>
        <ResourcesIcon />
        <Code> {'<ResourcesIcon />'} </Code>
      </ExampleIcon>
      <ExampleIcon>
        <ReportingIcon />
        <Code> {'<ReportingIcon />'} </Code>
      </ExampleIcon>
      <ExampleIcon>
        <SettingsIcon />
        <Code> {'<SettingsIcon />'} </Code>
      </ExampleIcon>
      <ExampleIcon>
        <BookingsIcon />
        <Code> {'<BookingsIcon />'} </Code>
      </ExampleIcon>
      <ExampleIcon>
        <CovidIcon />
        <Code> {'<CovidIcon />'} </Code>
      </ExampleIcon>
      <ExampleIcon>
        <UploadIcon />
        <Code> {'<UploadIcon />'} </Code>
      </ExampleIcon>
      <ExampleIcon>
        <MeetingsIcon />
        <Code> {'<MeetingsIcon />'} </Code>
      </ExampleIcon>
    </>
  );
};

const Users = Icons.bind({});

export default {
  title: 'ResourcesIcons',
  component: Icons,
  parameters: {
    docs: {
      source: {
        code: ` `
      }
    }
  }
} as Meta;

const Code = styled.span`
  display: inline-block;
  padding-left: 40px;
`;

const ExampleIcon = styled.div`
  padding: 30px;
`;
