import React from 'react';
import styled from 'styled-components';
import { Button } from '../modal-button';

interface IModalButton {
  label: string;
  onClick: () => void;
}

export interface IModalHeader {
  type?: string;
  headerTitle: string;
  theme?: any;
  confirmButton: IModalButton | null;
  cancelButton: IModalButton;
}

export const ModalHeader = ({
  headerTitle,
  confirmButton,
  cancelButton,
}: IModalHeader) => (
  <Header>
    <TitleWrapper>
      <Title>{headerTitle}</Title>
    </TitleWrapper>
    <ButtonGroup>
      {confirmButton && confirmButton.onClick && (
        <Button
          background={'rgb(249, 53, 73)'}
          color={'rgb(255, 255, 255)'}
          onClick={confirmButton.onClick}
        >
          {confirmButton && confirmButton.label}
        </Button>
      )}
      {cancelButton.onClick && (
        <Button
          background={'rgb(239, 239, 239)'}
          color={'rgb(0, 0, 0)'}
          onClick={cancelButton.onClick}
        >
          {cancelButton.label}
        </Button>
      )}
    </ButtonGroup>
  </Header>
);

const Title = styled.div`
  font-size: 23px;
  color: #fff;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  button:last-of-type {
    margin-left: 20px;
  }
`;
