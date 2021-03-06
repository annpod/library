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
    >
      {props.children || 'Search'}
    </Submit>
  );
};

export const Submit = styled(Button)`
  && {
    margin-top: 20px;
    background-color: ${(props) => props.theme.bgBackground};
    width: 216px;
    height: 36px;
    font-size: 15px;
    color: #fff;
    border: none;
    border-radius: 5px;
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
