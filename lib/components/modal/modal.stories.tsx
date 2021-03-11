import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Store, State } from '@sambego/storybook-state';

import { ModalPopup, IModalPopup } from './modal';
import { ExportBtn } from '../button';

const store = new Store({
  isVisible: false
});

export default {
  title: 'Modal/ModalPopup',
  component: ModalPopup,
  args: {
    visible: false,
    children: `<div>Modal Content</div>`,
    headerTitle: 'Modal Header'
  },
  argTypes: {
    confirmButton: {
      type: { required: false },
      table: {
        type: { summary: '{label: string; onClick: () => void;}' }
      }
    },
    cancelButton: {
      type: { required: true },
      table: {
        type: { summary: '{label: string; onClick: () => void;}' }
      }
    },
    afterClose: {
      type: { required: false },
      table: {
        type: { summary: '() => void;' }
      }
    },
    headerTitle: {
      type: { required: true },
      table: {
        type: { summary: 'string' },
      }
    },
    visible: {
      type: { required: true },
      table: {
        type: { summary: 'boolean' }
      }
    },
    children: {
      type: { required: true },
      table: {
        type: { summary: 'string | React.ReactElement' }
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `<ModalPopup
                  visible={false}
                  children={<div>Modal Content</div>}
                  headerTitle={'Modal Header'}
                  confirmButton={{
                    label: 'confirm',
                    onClick: onConfirm
                  }}
                  cancelButton={{
                    label: 'cancel',
                    onClick: onCancel
                  }}
                />`
      }
    }
  }
} as Meta;

export const Modal = (args: IModalPopup) => (
  <State store={store}>
    {(state) => (
      <>
        <ExportBtn onClick={() => store.set({ isVisible: !state.isVisible })}>
          Open
        </ExportBtn>
        <ModalPopup
          {...args}
          visible={state.isVisible}
          confirmButton={{
            label: 'confirm',
            onClick: () => store.set({ isVisible: false })
          }}
          cancelButton={{
            label: 'cancel',
            onClick: () => store.set({ isVisible: false })
          }}
        />
      </>
    )}
  </State>
);
