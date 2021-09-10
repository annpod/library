import React from 'react';
import styled from 'styled-components';

import { Drawer as DrawerAntd } from 'antd';
// import { SiderHeader } from './drawer-header';
import { IDrawer } from '../typings';
import 'antd/lib/drawer/style/css';
import close from '../icon/icons/close.svg';
import { ButtonStyled } from '../button';

export const Drawer = ({
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
  style,
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
    style={style}
  >
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
  </DrawerComponent>
);

// export const Drawer: any = withTheme(DrawerC);

const DrawerComponent = styled(DrawerAntd)`
  && .ant-drawer-content {
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
