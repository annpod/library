import React from 'react';
import styled, { withTheme } from 'styled-components';

import { Modal as ModalAntd }from 'antd';
import { ModalHeader } from './modal-header';
import { IModal } from '../typings';
import 'antd/lib/modal/style/css';



const ModalC = ({ visible, children, afterClose, ...props }: IModal) => (
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

export const Modal: any = withTheme(ModalC);

const ModalDialog = styled(ModalAntd)`
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
