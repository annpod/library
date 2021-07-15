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
    }
    .Toastify__toast--error {
      color: ${(props) => props.theme.toast.error.color};
      background: ${(props) => props.theme.toast.error.background};
      border-color: ${(props) => props.theme.toast.error.borderColor};
    }
    .Toastify__toast--warn {
      color: ${(props) => props.theme.toast.warn.color};
      background: ${(props) => props.theme.toast.warn.background};
      border-color: ${(props) => props.theme.toast.warn.borderColor};
    }
    .Toastify__toast--info {
      color: ${(props) => props.theme.toast.info.color};
      background: ${(props) => props.theme.toast.info.background};
      border-color: ${(props) => props.theme.toast.info.borderColor};
    }
    .Toastify__toast--success {
      color: ${(props) => props.theme.toast.success.color};
      background: ${(props) => props.theme.toast.success.background};
      border-color: ${(props) => props.theme.toast.success.borderColor};
    }
    .Toastify__toast--default {
      color: ${(props) => props.theme.toast.default.color};
      background: ${(props) => props.theme.toast.default.background};
      border-color: ${(props) => props.theme.toast.default.borderColor};
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
