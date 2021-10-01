import React from 'react';
import styled from 'styled-components';

import { Modal as ModalAntd } from 'antd';
import { DialogueFooter } from './dialogue-footer';
import { IDialogue, DialogueTypes } from '../typings';
import 'antd/lib/modal/style/css';

interface IDialogueProps {
  dialogueType: DialogueTypes;
  headerTitle?: string;
}

const ModalDialog = styled(ModalAntd)<IDialogueProps>`
  max-width: 600px;
  .ant-modal-header {
    border: none;
    padding: 30px 30px 20px;
    font-size: 16px;
  }
  .ant-modal-footer {
    padding: 30px 30px 35px;
    border: none;
  }
  .ant-modal-body {
    padding: 10px 30px 10px;
    font-size: 12px;
  }
`;

const Wrapper =
  (dialogueType: DialogueTypes) =>
  ({
    visible,
    children,
    afterClose,
    headerTitle,
    closable,
    ...props
  }: IDialogue) => {
    return (
      <ModalDialog
        dialogueType={dialogueType}
        title={headerTitle}
        closable={closable}
        visible={visible}
        footer={<DialogueFooter {...props} />}
        className={props.className}
        width={'500px'}
        afterClose={afterClose}
        onCancel={props.cancelButton.onClick}
      >
        {children}
      </ModalDialog>
    );
  };

export const Dialogue = {
  Primary: Wrapper(DialogueTypes.Primary)
};
