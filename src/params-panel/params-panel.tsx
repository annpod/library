import React, { useState, FunctionComponent } from 'react';

import {
  ParamsPanelBody,
  ParamsPanelTitle,
  ParamsContainer,
  ComponentWrapper,
} from './params-panel.styled';
import { CustomScrollbars } from '../scrollbars';

export interface IParamsPanelProps {
  title: string;
  // children: React.ReactElement;
}

export const ParamsPanel: FunctionComponent<IParamsPanelProps> = (props) => {
  const [isOpen] = useState(true); // TODO: Use later for panel collapse

  const panelWidth = isOpen ? '254px' : '0';
  const bodyStyle = {
    width: panelWidth,
    minWidth: panelWidth,
    height: '100%',
  };

  return (
    <ParamsPanelBody style={bodyStyle}>
      <ParamsPanelTitle>{props.title}</ParamsPanelTitle>
      <ParamsContainer>
        <CustomScrollbars height={'100%'} flex={1}>
          {React.Children.map(props.children, (item, index) => {
            return <ComponentWrapper key={index}>{item}</ComponentWrapper>;
          })}
        </CustomScrollbars>
      </ParamsContainer>
    </ParamsPanelBody>
  );
};
