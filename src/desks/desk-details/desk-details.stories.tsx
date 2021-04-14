import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { DeskDetails as DeskDetailsC } from './desk-details';
import { deskFilterData, deskData, usersData } from '../mocks';
import { ISaveDeskData } from '../../typings';



export const DeskDetails = (args: any) => (
  <DeskDetailsC
    deskData={args.deskDetails}
    deskFilterData={args.deskFilterData}
    usersData={args.usersData}
    deskKey={args.deskKey}
    onCancel={args.onCancel}
    onSave={args.onSave}
    onDelete={args.onDelete}
    deskDetailsRouteHandler={args.deskDetailsRouteHandler}
    // desk={args.desk}
    // options={args.options}
    isImplementation={args.isImplementation}
    fetchUsers={args.fetchUsers}
  />
);

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
    // desk,
    // options,
    deskData,
    deskFilterData,
    usersData,
    isImplementation: true,
    // eslint-disable-next-line
    fetchUsers: (search: string) => {}
  },
  parameters: {
    docs: {
      source: {
        code: `<DeskDetails
        deskKey={state.currentDeskKey || deskKey}
        deskFilterData={deskFilterData}
        usersData={usersData}
        onCancel={cancelDeskView}
        onSave={onSaveDesk}
        onDelete={onRemoveDesk}
        deskDetailsRouteHandler={deskDetailsRouteHandler}
        isImplementation={isImplementation}
        fetchUsers={fetchUsers}
        deskData={deskDetails}
      />`
      }
    }
  }
} as Meta;

