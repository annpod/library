import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { ModalPopup, IModalPopup } from './modal';

export default {
  title: 'Modal/ModalPopup',
  component: ModalPopup,
  args: {
    visible: true,
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
        type: { summary: 'string' }
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
  <ModalPopup
    {...args}
    visible={args.visible}
    confirmButton={{
      label: 'confirm',
      onClick: () => {}
    }}
    cancelButton={{
      label: 'cancel',
      onClick: () => {}
    }}
  />
);
