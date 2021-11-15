import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ToastOptions } from 'react-toastify';
import { ToastStatus, IToastMessage } from '../typings';
import { Toast } from './toast.styled';
import { showToast } from './toast';
import { GlobalStyles } from '../styles';

interface IToast {
  message?: IToastMessage;
  status?: ToastStatus;
}

export default {
  title: 'V1/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `Based on https://fkhadra.github.io/react-toastify/introduction

        Statuses: 
                
          logId => showToast(message);
          success => showToast(message, ToastStatus.success);
          error => showToast(message, ToastStatus.error);

        Message:

        message = {
          logId,
          message
        }
        `
      },
      source: {
        type: 'code',
        code: `<Toast  />
        showToast(message, ToastStatus.success);
        message={
          logId,
          message
        }
        `
      }
    }
  },
  argTypes: {
    pauseOnHover: {
      type: { required: false },
      table: {
        type: { summary: 'boolean' }
      },
      defaultValue: { summary: true }
    },
    closeOnClick: {
      type: { required: false },
      table: {
        type: { summary: 'boolean' }
      },
      defaultValue: { summary: true }
    },
    autoClose: {
      type: { required: false },
      table: {
        type: { summary: 'number | false' }
      },
      defaultValue: { summary: 2500 }
    },
    closeButton: {
      type: { required: false },
      table: {
        type: {
          summary:
            'React.ReactElement | ((props: any) => React.ReactElement) | boolean'
        }
      },
      defaultValue: { summary: false }
    },
    position: {
      type: { required: false },
      table: {
        type: { summary: 'ToastPosition' }
      },
      defaultValue: { summary: 'top-right' }
    },
    bodyClassName: {
      type: { required: false },
      table: {
        type: { summary: 'ToastClassName' }
      },
      defaultValue: { summary: true }
    },
    bodyStyle: {
      type: { required: false },
      table: {
        type: { summary: 'React.CSSProperties' }
      },
      defaultValue: { summary: true }
    },
    hideProgressBar: {
      type: { required: false },
      table: {
        type: { summary: 'boolean' }
      },
      defaultValue: { summary: false }
    },
    draggable: {
      type: { required: false },
      table: {
        type: { summary: 'boolean' }
      },
      defaultValue: { summary: true }
    },
    progress: {
      type: { required: false },
      table: {
        type: { summary: 'number | string' }
      },
      defaultValue: {
        summary:
          'Set the percentage for the controlled progress bar. `Value must be between 0 and 1.'
      }
    },
    delay: {
      type: { required: false },
      table: {
        type: { summary: 'number' }
      },
      defaultValue: { summary: 'Add a delay in ms before the toast appear' }
    },
    onClick: {
      type: { required: false },
      table: {
        type: { summary: '(event: React.MouseEvent) => void' }
      },
      defaultValue: { summary: 'Fired when clicking inside toaster' }
    },
    onOpen: {
      type: { required: false },
      table: {
        type: { summary: '<T = {}>(props: T) => void' }
      },
      defaultValue: { summary: 'Called when toast is mounted' }
    },
    onClose: {
      type: { required: false },
      table: {
        type: { summary: '<T = {}>(props: T) => void' }
      },
      defaultValue: { summary: 'Called when toast is unmounted' }
    },
  }
} as Meta;

const message1 = {
  logId: '213412341411241414'
};
const message2 = {
  message: 'Sucess message'
};
const message3 = {
  message: 'Error message'
};
const message4 = {};
const Content = () => (
  <div>
    Toast Message with <a href='#'>Link</a>
  </div>
);
const message5 = {
  message: <Content />
};
const options: ToastOptions = {
  autoClose: false,
  closeButton: true
};

const Template: Story<IToast> = () => (
  <>
    <Toast />
    <button onClick={() => showToast(message1)}>
      Show logId(default) Toast
    </button>
    <br />
    <br />
    <button onClick={() => showToast(message2, ToastStatus.success)}>
      Show Sucess Toast
    </button>
    <br />
    <br />
    <button onClick={() => showToast(message3, ToastStatus.error)}>
      Show Error Toast
    </button>
    <br />
    <br />
    <button onClick={() => showToast(message4, ToastStatus.error)}>
      Show 500 error Toast
    </button>
    <br />
    <br />
    <button onClick={() => showToast(message5, ToastStatus.error, options)}>
      Show Toast with React Element content
    </button>
  </>
);

export const Primary = Template.bind({});
