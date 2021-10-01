import * as React from 'react';
import styled from 'styled-components';

import { Logo } from './components/logo';
import { NavBar } from './components/nav-bar';

import { IHeaderProps } from '../typings';

export const FullscreenHeader = ({
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
    height: 90px;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    padding: 10px 30px;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;
    position: relative;
  }
`;
