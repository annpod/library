import React from 'react';
import { FullscreenHeader } from '../header';
import { Container } from './layout.styled';
import { ILayoutProps } from '../typings';

export const Layout = ({
  children,
  menu,
  isProfile,
  onLogout,
  onLogoClick
}: ILayoutProps) => {
  return (
    <>
      <FullscreenHeader
        menu={menu}
        onLogout={onLogout}
        isProfile={isProfile}
        onLogoClick={onLogoClick}
      />
      <Container>{children}</Container>
    </>
  );
};
