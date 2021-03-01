import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Store, State } from '@sambego/storybook-state';

import { DeskDetails } from './desk-details';
import { desk, options } from './mocks';
import { ISaveDeskData } from './desks.typings';

const store = new Store({
  isVisible: false
});


export default {
  title: 'Desks/DeskDetails',
  component: DeskDetails,
  args: {
    deskKey: '12',
    onCancel: () => {},
    // tslint:disable-next-line:no-console
    onSave: (data: ISaveDeskData, cb: () => void) => {},
    // tslint:disable-next-line:no-console
    onDelete: (provisioningKey: string) => {},
    deskDetailsRouteHandler: () => {},
    desk,
    options,
    isImplementation: true,
    // tslint:disable-next-line:no-console
    onFetchUsers: (search: string) => {},
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
