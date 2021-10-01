import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../button';
import { IDialogueFooter } from '../typings';

export const DialogueFooter = ({
  confirmButton,
  cancelButton
}: IDialogueFooter) => (
  <ButtonGroup>    
    {cancelButton.onClick && (
      <ButtonStyled.Cancel
        onClick={cancelButton.onClick}
      >
        {cancelButton.label}
      </ButtonStyled.Cancel>
    )}
    {confirmButton && confirmButton.onClick && (
      <ButtonStyled.Primary
        onClick={confirmButton.onClick}
      >
        {confirmButton && confirmButton.label}
      </ButtonStyled.Primary>
    )}
  </ButtonGroup>
);

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button:last-of-type {
    margin-left: 20px;
  }
`;
