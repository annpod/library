import React from 'react';
import styled, { withTheme } from 'styled-components';

import { Modal as ModalAntd }from 'antd';
import { SiderHeader } from './sider-header';
import { ISider } from '../typings';
import { Icon } from '../icon';
import 'antd/lib/modal/style/css';



const SiderC = ({ visible, siderContent, type, afterClose, headerTitle }: ISider) => (
  <SiderComponent
    title={<SiderHeader headerTitle={headerTitle} />}
    closable={true}
    closeIcon={<Icon type={'close'} size={25} />}
    visible={visible}
    footer={null}    
    centered={false}
    className={type}
    width={'292px'}
    afterClose={afterClose}
    style={{ top: 0, right: 0 }}
  >
    {siderContent}
  </SiderComponent>
);

export const Sider: any = withTheme(SiderC);

const SiderComponent = styled(ModalAntd)`
  max-width: 292px;
  margin: 0;
  position: absolute;
  min-height: 100vh;
  .ant-modal-content {
    min-height: 100vh;
    border-radius: 0;
  }
  .ant-modal-header {
    padding: 15px 20px; 
    background: #F7F7F7;
  }
  .ant-modal-body {
    padding: 10px 20px 35px;
  }
  .ant-modal-close {
    top: 13px;
    right: 20px;
    height: 25px;
    width: 25px;    
  }
`;
