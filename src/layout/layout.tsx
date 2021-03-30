import * as React from 'react';

import { Content, Wrapper } from './layout.style';
import { Header } from '../header';

export interface IHeaderOption {
  btn: string;
  route: string;
  order: number;
}

export interface ILayoutProps {
  children: React.ReactElement;
}

export const Layout = (props: ILayoutProps) => {
  return (
    <Wrapper>
      <Content>{props.children}</Content>
    </Wrapper>
  );
};
