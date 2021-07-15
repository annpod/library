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
      ${(props) => `
      &--error {
        color: ${props.theme.toast.error.color};
        background: ${props.theme.toast.error.background};
        border-color: ${props.theme.toast.error.borderColor};
      }
      &--warn {
        color: ${props.theme.toast.warn.color};
        background: ${props.theme.toast.warn.background};
        border-color: ${props.theme.toast.warn.borderColor};
      }
      &--info {
        color: ${props.theme.toast.info.color};
        background: ${props.theme.toast.info.background};
        border-color: ${props.theme.toast.info.borderColor};
      }
      &--success {
        color: ${props.theme.toast.success.color};
        background: ${props.theme.toast.success.background};
        border-color: ${props.theme.toast.success.borderColor};
      }
      &--default {
        color: ${props.theme.toast.default.color};
        background: ${props.theme.toast.default.background};
        border-color: ${props.theme.toast.default.borderColor};
      }
      `}
    }
    .Toastify__toast-body {
      padding: 0;
    }
    .Toastify__progress-bar.Toastify__progress-bar {
      ${(props) => `
        &--error {
          background: ${props.theme.toast.error.borderColor};
        }
        &--warn {
          background: ${props.theme.toast.warn.borderColor};
        }
        &--info {
          background: ${props.theme.toast.info.borderColor};
        }
        &--success {
          background: ${props.theme.toast.success.borderColor};
        }
      `}
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
