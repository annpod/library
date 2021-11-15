import * as React from 'react';
import styled from 'styled-components';

import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ToastStatus,
  IToastMessage,
  IToastProps,
} from '../typings';
import { toastStrings } from './toast.strings';
import { Icon } from '../icon';
import '../styles.css';

const iconMap = {
  [ToastStatus.error]: 'errorrRed',
  [ToastStatus.success]: 'successGreen'
};

const LogIdContent = ({ logId }: { logId: string }) => (
  <div>
    {toastStrings.logIdMessage}
    <div>
      <strong>
        {toastStrings.logId} {logId}
      </strong>
    </div>
  </div>
);

const Toast = (props: IToastProps) => {
  const { message, logId } = props.data;
  let toastMessage: string | React.ReactNode = toastStrings.error;

  if (!logId && !message) {
    toastMessage = toastStrings.error;
  } else {
    toastMessage = logId ? <LogIdContent logId={logId} /> : message;
  }

  return (
    <ToastContent data-location='toast'>
      <Icon
        type={!props.status ? 'errorrRed' : iconMap[props.status]}
        size={'19px'}
      />
      <ToastMessage>{toastMessage}</ToastMessage>
    </ToastContent>
  );
};

export const showToast = (
  message: IToastMessage,
  status?: ToastStatus,
  options?: ToastOptions
) => {
  if (!status) {
    toast(<Toast data={message} />, {
      draggable: false,
      autoClose: false,
      hideProgressBar: true,
      position: toast.POSITION.BOTTOM_CENTER
    });
    return;
  }
  toast[status](<Toast data={message} status={status} />, {
    draggable: false,
    autoClose: 2500,
    hideProgressBar: true,
    closeButton: false,
    position: toast.POSITION.TOP_CENTER,
    ...options
  });
};

export const dismissToast = () => {
  toast.dismiss();
};

const ToastContent = styled.div`
  display: flex;
  align-items: flex-start;
`;
const ToastMessage = styled.div`
  padding: 0 15px;
`;
