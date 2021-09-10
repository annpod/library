import React from 'react';
import styled, { withTheme } from 'styled-components';

import { Drawer as DrawerAntd } from 'antd';
import { IDrawer } from '../typings';
import 'antd/lib/drawer/style/css';
import close from '../icon/icons/close.svg';
import { ButtonStyled } from '../button';

const DrawerC = ({
  visible,
  drawerContent,
  headerTitle,
  onCancel,
  onClose,
  onOk,
  okText,
  cancelText,
  okButtonProps,
  cancelButtonProps,
  afterVisibleChange,
}: IDrawer) => (
  <DrawerComponent
    title={headerTitle}
    closable={true}
    onClose={onClose}
    visible={visible}
    width={'292px'}
    afterVisibleChange={afterVisibleChange}
    data-location='drawer'
  >
    <>
    {drawerContent}
    <Footer>
      {okText && (
        <ButtonStyled.Primary
          data-location='okButton'
          onClick={onOk}
          disabled={okButtonProps && okButtonProps.disabled}
        >
          {okText}
        </ButtonStyled.Primary>
      )}
      {cancelText && (
        <ButtonStyled.Light
          data-location='cancelButton'
          onClick={onCancel}
          disabled={cancelButtonProps && cancelButtonProps.disabled}
        >
          {cancelText}
        </ButtonStyled.Light>
      )}
    </Footer>
    </>
  </DrawerComponent>
);

export const Drawer: any = withTheme(DrawerC as any);

const DrawerComponent = styled(DrawerAntd)`
 .ant-drawer-content {
    max-width: 292px;
    margin: 0;
    .ant-drawer-header {
      background: #f7f7f7;
      color: #434448;
      font-size: 14px;
    }
    .ant-drawer-close {
      background: url(${close}) no-repeat center center;
      .anticon {
        display: none;
      }
    }
  }
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;
