import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Dialogue } from './dialogue';
import { IDialogue } from '../typings';

export default {
  title: 'Dialogue',
  component: Dialogue.Primary,
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
        component: `Based on https://ant.design/components/modal/`
      },
      source: {
        code: `<Dialogue.Primary
                  visible={visible}
                  children={<div>ModalBox Content</div>}
                  headerTitle={'ModalBox Header'}
                  afterClose={afterClose}
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

const Template: Story<IDialogue> = () => {
  const [state, setState] = React.useState<boolean>(true);

  const onClick = () => {
    setState(!state);
  };

  return (
    <>
      <button onClick={onClick}>Open Dialog</button>
      <Dialogue.Primary
        headerTitle={'Dialogue Title'}
        visible={state}
        confirmButton={{
          label: 'Confirm',
          onClick: () => {}
        }}
        cancelButton={{
          label: 'Cancel',
          onClick: onClick
        }}
      >
        {'Dialogue Content'}
      </Dialogue.Primary>
    </>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
