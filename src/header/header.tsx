import * as React from 'react';
import styled from 'styled-components';

import { Logo } from './components/logo';
import { NavBar } from './components/nav-bar';

import { mediaStyled } from '../styles/media';
import { IHeaderProps } from '../typings';

export const Header = ({ menu, onLogout }: IHeaderProps) => {
  return (
    <Wrapper data-location="header">
      <Logo />
      {menu && menu.activeHeader && (
        <NavBar
          headerOptions={menu.headerOptions}
          activeHeader={menu.activeHeader}
          onLogout={onLogout}
        />
      )}
    </Wrapper>
  );
};

export const Wrapper = styled('div' as any)`
  && {
    background: ${(props) => props.theme.bgColor};
    height: 60px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mediaStyled.desktop`padding: 0 30px;`};
  }
`;
