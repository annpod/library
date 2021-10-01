import * as React from 'react';
import styled from 'styled-components';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ToastStatus, IToastMessage, IToastProps } from '../typings';
import { toastStrings } from './toast.strings';
import { Icon } from '../icon';
import '../styles.css';

const iconMap = {
  [ToastStatus.error]: 'errorrRed',
  [ToastStatus.success]: 'successGreen'
};

const Toast = (props: IToastProps) => {
  const { logId, message } = props.data;
  let toastMessage;
  if (!logId && !message) {
    toastMessage = toastStrings.error;
  } else {
    toastMessage = logId ? (
      <div>
        {toastStrings.logIdMessage}
        <div>
          <strong>
            {toastStrings.logId} {logId}
          </strong>
        </div>
      </div>
    ) : (
      message
    );
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

export const showToast = (message: IToastMessage, status?: ToastStatus) => {
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
    autoClose: 2000,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER
  });
};

export const dismissToast = () => {
  toast.dismiss();
}

const ToastContent = styled.div`
  display: flex;
  align-items: flex-start;
`;
const ToastMessage = styled.div`
  padding: 0 15px;
`;
