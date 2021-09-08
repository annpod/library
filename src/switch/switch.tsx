import React from 'react';
import styled from 'styled-components';
import { Switch as SwitchAntd } from 'antd';
import 'antd/lib/switch/style/css';
import { ISwitchProps } from '../typings';

export const Switch = (props: ISwitchProps) => ( 
    <SwitchC
      {...props}
    />
);

const SwitchC = styled(SwitchAntd)`
  &&.ant-switch {
    height: 13px;
    background-color: ${(props) => props.theme.switchBg};
    margin-right: 20px;
    min-width: 40px;
    &:after {
      top: -6px;
      left: -1px;
      height: 23px;
      width: 23px;
      background-color: #eaeaea;
    }
    &.ant-switch-checked {
      background-color: ${(props) => props.theme.switchActiveColor};
      &:after {
        left: 100%;
        margin-left: 2px;
        background-color: ${(props) => props.theme.switchActiveBg};
      }
    }
    .ant-switch-loading-icon svg {
      height: 20px;
      width: 20px;
      top: -10px;
    }
  }
`;

