import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Toast = styled(ToastContainer)`
  && {
    .Toastify__toast {
      border-width: 1px;
      border-style: solid;
      border-radius: 5px;
      font-size: 14px;
      font-weight: 400;
      font-family: 'Gotham';
      word-break: break-word;
      min-height: 45px;
      color: ${(props) => props.theme.toast.log.color};
      background: ${(props) => props.theme.toast.log.background};
      border-color: ${(props) => props.theme.toast.log.borderColor};
    }
    
   
    .Toastify__toast-body {
      padding: 0;
    }
    .Toastify__close-button {
      display: none;
      &.Toastify__close-button--default {
        color: #707070;
        display: block;
      }
    }
  }
`;
