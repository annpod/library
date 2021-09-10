import React from 'react';
import styled from 'styled-components';
import { ISiderHeader } from '../typings';

export const SiderHeader = ({
  headerTitle,
}: ISiderHeader) => (
  <Header>
    <TitleWrapper>
      <Title>{headerTitle}</Title>
    </TitleWrapper>   
  </Header>
);

const Title = styled.div`
  font-size: 14px;
  color: #434448;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

