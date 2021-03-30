import React from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';

export interface ISubmitButton {
  isDisabled: boolean;
  isLoading: boolean;
  title?: string;
  onClick: () => void;
}

export const SubmitButton = (props: ISubmitButton) => {
  // tslint:disable-next-line:no-console
  console.log('props', props);

  return (
    <Submit
      onClick={props.onClick}
      loading={props.isLoading}
      disabled={props.isDisabled}
    >
      {props.title ? props.title : 'Search'}
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
