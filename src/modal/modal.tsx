import React from 'react';
import styled, { withTheme } from 'styled-components';

import Modal from 'antd/lib/modal';
import { ModalHeader } from './modal-header';
import { IModalHeader } from './modal.typings';
import 'antd/lib/modal/style/css';

export interface IModalPopup extends IModalHeader {
  visible: boolean;
  children: string | React.ReactElement;
  afterClose?: () => void;
}

const ModalC = ({ visible, children, afterClose, ...props }: IModalPopup) => (
  <ModalDialog
    title={<ModalHeader {...props} />}
    closable={false}
    visible={visible}
    footer={null}
    className={props.type}
    width={'90%'}
    afterClose={afterClose}
  >
    {children}
  </ModalDialog>
);

export const ModalPopup: any = withTheme(ModalC);

const ModalDialog = styled(Modal)`
  max-width: 990px;
  .ant-modal-header {
    padding-top: 20px;
    padding-bottom: 20px;
    background: rgb(67, 68, 72);
  }
  .ant-modal-body {
    padding-top: 35px;
    padding-bottom: 35px;
  }
`;
