import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon';
import { IconButton } from '../icon-button';
import { IFocusViewLayout } from '../typings';


export const FocusViewLayout = ({ title, children, header, onClose }: IFocusViewLayout) => {

  const onClick = () => {
    onClose()
  }

  return (
    <Wrapper>
      <Header>
        <Headline>
          <Title>{title}</Title>
          <IconButton
            icon={<Icon size={25} type="close" />}
            onClick={onClick}
          />
        </Headline>
        <SubHeader>
          {header}
        </SubHeader>
      </Header>
      <Content>
        {children}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.contentHeaderBg};
  border-bottom: 1px solid ${props => props.theme.borderColorLight};
`;

const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 70px;
  border-bottom: 1px solid ${props => props.theme.borderColorLight};
  padding: 0 15px 0 20px;
  align-items: center;
`;

const SubHeader = styled.div`
  display: flex;
  min-height: 70px;
`;

const Title = styled.div`
  display: flex;
  font-size: 18px;
  font-family: Gotham-Medium;
`;

const Content = styled.div`
  display: flex;
`;