import React from 'react';
import styled, { withTheme } from 'styled-components';

import { Modal as ModalAntd } from 'antd';
import { SiderHeader } from './sider-header';
import { ISider } from '../typings';
import { Icon } from '../icon';
import 'antd/lib/modal/style/css';

const SiderC = ({
  visible,
  siderContent,
  type,
  afterClose,
  headerTitle,
  onCancel,
  onOk,
  okText,
  cancelText
}: ISider) => (
  <SiderComponent
    title={<SiderHeader headerTitle={headerTitle} />}
    closable={true}
    onCancel={onCancel}
    closeIcon={<Icon type={'close'} size={25} />}
    visible={visible}
    centered={false}
    className={type}
    width={'292px'}
    afterClose={afterClose}
    style={{ top: 0, right: 0 }}
    onOk={onOk}
    okText={okText}
    cancelText={cancelText || 'Cancel'}
  >
    {siderContent}
  </SiderComponent>
);

export const Sider: any = withTheme(SiderC);

const SiderComponent = styled(ModalAntd)`
  max-width: 292px;
  margin: 0;
  position: fixed;
  min-height: 100vh;
  .ant-modal-content {
    min-height: 100vh;
    border-radius: 0;
  }
  .ant-modal-header {
    padding: 15px 20px;
    background: #f7f7f7;
  }
  .ant-modal-body {
    padding: 10px 20px 35px;
  }
  .ant-modal-footer {
    border-top: none;
    display: flex;
    div {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
    }
    button {
      width: 100%;
      margin: 0 0 20px 0;
      &.ant-btn {
        font-face: 12px;
        color: #707070;
        border: none;
        box-shadow: none;
        height: 36px;
        border-radius: 18px;
      }
      &.ant-btn-primary {
        background-color: #ee4656;
        color: #ffffff;
      }
    }
  }
  .ant-modal-close {
    top: 13px;
    right: 20px;
    height: 25px;
    width: 25px;
  }
`;
