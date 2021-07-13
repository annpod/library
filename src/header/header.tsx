import * as React from 'react';
import styled from 'styled-components';

import { Logo } from './components/logo';
import { NavBar } from './components/nav-bar';

import { mediaStyled } from '../styles/media';
import { IHeaderProps } from '../typings';

export const Header = ({
  menu,
  isProfile,
  onLogoClick,
  onLogout
}: IHeaderProps) => {
  return (
    <Wrapper data-location='header'>
      <Logo onClick={onLogoClick} />
      <NavBar
        headerOptions={menu && menu.headerOptions ? menu.headerOptions : []}
        activeHeader={menu && menu.activeHeader ? menu.activeHeader : null}
        isProfile={isProfile}
        onLogout={onLogout}
      />
    </Wrapper>
  );
};

const Wrapper = styled('div' as any)`
  && {
    background: ${(props) => props.theme.bgColor};
    height: 90px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    ${mediaStyled.desktop`padding: 0 30px;`};
    border-bottom: 1px solid #dbdbdb;
  }
`;
