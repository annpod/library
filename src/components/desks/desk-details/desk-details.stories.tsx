import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Store, State } from '@sambego/storybook-state';

import { DeskDetails } from './desk-details';
import { desk, options, deskFilterData, deskData, usersData } from '../mocks';
import { ISaveDeskData } from '../desks.typings';

const store = new Store({
  isVisible: false
});
export default {
  title: 'Desks/DeskDetails',
  component: DeskDetails,
  args: {
    deskKey: '12',
    onCancel: () => {},
    // eslint:disable-next-line
    onSave: (data: ISaveDeskData, cb: () => void) => {},
    // eslint:disable-next-line
    onDelete: (provisioningKey: string) => {},
    // eslint:disable-next-line
    deskDetailsRouteHandler: () => {},
    desk,
    options,
    deskData,
    deskFilterData,
    usersData,
    isImplementation: true,
    // eslint:disable-next-line
    onFetchUsers: (search: string) => {}
  },
  parameters: {
    docs: {
      source: {
        code: `<DeskDetails
        deskKey={state.currentDeskKey || deskKey}
        onCancel={cancelDeskView}
        onSave={onSaveDesk}
        onDelete={onRemoveDesk}
        deskDetailsRouteHandler={deskDetailsRouteHandler}
        desk={state.desk}
        options={state.options}
        isImplementation={isImplementation}
        onFetchUsers={onFetchUsers}
      />`
      }
    }
  }
} as Meta;

export const DeskDetailsPage = (args: any) => (
  <State store={store}>
    {(state) => (
      <DeskDetails
        deskData={args.deskDetails}
        // getDeskDetails={args.getDeskDetails}
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
    )}
  </State>
);
