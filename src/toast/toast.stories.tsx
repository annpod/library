import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ToastStatus, IToastMessage } from '../typings';
import { Toast } from './toast.styled';
import { showToast } from './toast';

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
        component: 'Based on https://fkhadra.github.io/react-toastify/introduction'
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

showToast(message1);
showToast(message2, ToastStatus.success);
showToast(message3, ToastStatus.error);
showToast(message4, ToastStatus.error);

const Template: Story<IToast> = () => (
  <Toast />
);

export const Primary = Template.bind({});
