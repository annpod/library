import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60px;
  background-color: ${(props) => props.theme.contentHeaderBgColor};
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.headerFontSize};
  color: ${(props) => props.theme.textColorMain};
  text-transform: uppercase;
  padding-left: 40px;
`;

export interface IContentHeaderProps {
  title: string;
}

export const ContentHeader = (props: IContentHeaderProps) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
    </Wrapper>
  );
};
