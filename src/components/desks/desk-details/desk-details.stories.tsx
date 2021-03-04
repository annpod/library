import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { DeskDetails } from './desk-details';
import { desk, options, deskFilterData, deskData, usersData } from '../mocks';
import { ISaveDeskData } from '../desks.typings';

export default {
  title: 'Desks/DeskDetails',
  component: DeskDetails,
  args: {
    deskKey: '12',
    onCancel: () => {},
    // eslint-disable-next-line
    onSave: (data: ISaveDeskData, cb: () => void) => {},
    // eslint-disable-next-line
    onDelete: (provisioningKey: string) => {},
    deskDetailsRouteHandler: () => {},
    desk,
    options,
    deskData,
    deskFilterData,
    usersData,
    isImplementation: true,
    // eslint-disable-next-line
    onFetchUsers: (search: string) => {}
  },
  parameters: {
    docs: {
      source: {
        code: `<DeskDetails
        deskData={deskDetails}
        deskFilterData={deskFilterData}
        usersData={usersData}
        deskKey={deskKey}
        onCancel={onCancel}
        onSave={onSave}
        onDelete={onDelete}
        deskDetailsRouteHandler={deskDetailsRouteHandler}
        desk={desk}
        options={options}
        isImplementation={isImplementation}
        onFetchUsers={onFetchUsers}
      />`
      }
    }
  }
} as Meta;

export const DeskDetailsPage = (args: any) => (
  <DeskDetails
    deskData={args.deskDetails}
    deskFilterData={args.deskFilterData}
    usersData={args.usersData}
    deskKey={args.deskKey}
    onCancel={args.onCancel}
    onSave={args.onSave}
    onDelete={args.onDelete}
    deskDetailsRouteHandler={args.deskDetailsRouteHandler}
    desk={args.desk}
    options={args.options}
    isImplementation={args.isImplementation}
    onFetchUsers={args.onFetchUsers}
  />
);
