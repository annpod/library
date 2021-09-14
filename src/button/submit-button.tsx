import React from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';

import { ISubmitButton } from '../typings';

export const SubmitButton = (props: ISubmitButton) => {
  return (
    <Submit
      onClick={props.onClick}
      loading={props.isLoading}
      disabled={props.isDisabled}
      data-location='submit-button'
    >
      {props.children || 'Search'}
    </Submit>
  );
};

export const Submit = styled(Button)`
  && {
    margin-top: 20px;
    background-color: ${(props) => props.theme.bgBackground};
    min-width: 150px;
    width: 100%;
    height: 36px;
    font-size: 12px;
    color: #fff;
    border: none;
    border-radius: 18px;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
      color: #fff;
      &:hover {
        background-color: ${(props) => props.theme.bgBackground};
        color: #fff;
      }
    }
  }
`;
