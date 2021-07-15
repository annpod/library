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

const Template: Story<IToast> = () => (
  <>
  <Toast />  
  <button onClick={()=>showToast(message1)} >Show logId(default) Toast</button><br /><br />
  <button onClick={()=>showToast(message2, ToastStatus.success)} >Show Sucess Toast</button><br /><br />
  <button onClick={()=>showToast(message3, ToastStatus.error)} >Show Error Toast</button><br /><br />
  <button onClick={()=>showToast(message4, ToastStatus.error)} >Show 500 error Toast</button><br /><br />
  </>
);

export const Primary = Template.bind({});
