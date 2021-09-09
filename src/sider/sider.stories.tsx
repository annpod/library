import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Sider } from './sider';
import { IModal } from '../typings';

export default {
  title: 'Sider',
  component: Sider,
  args: {
    visible: true,
    children: `Sider Content`,
    headerTitle: 'Sider Header'
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
      description: {
        component: 'Based on https://ant.design/components/modal/',
      },
      source: {
        code: `<Sider
                  visible={false}
                  siderContent={<div>Modal Content</div>}
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
    },   
  }
} as Meta;

export const Primary = (args: IModal) => (
  <Sider
    {...args}
    visible={args.visible}
    siderContent={<div>Modal Content</div>}
    onOk={() => {}}
    okText={'okText'}
    cancelText={'cancelText'}
  />
);
