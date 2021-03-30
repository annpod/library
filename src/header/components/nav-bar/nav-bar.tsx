import * as React from 'react';
import styled from 'styled-components';
import { NavBarButton } from './nav-bar-btn';
import { mediaStyled } from '../../../styles/media';
import { NavBarIcon, NavBarIconContainer } from './nav-bar-icon';
import { IHeaderOption } from '../../../layout';
import ProfileMenu from './profile-menu';

const Wrapper = styled.div`
  flex-direction: row;
  align-items: center;
  height: 100%;
  ${mediaStyled.tablet`display: none;`};
  ${mediaStyled.desktop`display: flex;`};
`;

const RightMenuDropDown = styled.div`
  position: absolute;
  top: 60px;
  width: 154px;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s ease-in-out;
  ${mediaStyled.desktop`
    right: 10px;
  `};
`;

const ProfileIconContainer = styled.div`
  &:hover ${RightMenuDropDown} {
    display: block;
    visibility: visible;
    opacity: 1;
  }
  &:hover {
    cursor: pointer;
  }
  hight: 25px;
`;

const RedirectLink = styled.a``;

export interface INavBarProps {
  headerOptions: IHeaderOption[];
  activeHeader: string;
  onLogout: () => void;
}

export const NavBar = React.memo((props: INavBarProps) => {
  const icons = [
    {
      type: 'user',
      onClick: props.onLogout
    },
    {
      type: 'headerHelp',
      onClick: () =>
        (window.location.href =
          'https://support.smartspaceplc.com/hc/en-gb/categories/360002253299-Workplace-Help-and-User-Guides')
    }
  ];

  return (
    <Wrapper>
      {props.headerOptions
        .filter((e) => e.btn !== 'Help')
        .sort((a, b) => a.order - b.order)
        .map(({ btn, route }, index) => (
          <RedirectLink href={route} key={index}>
            <NavBarButton isActive={btn === props.activeHeader}>
              {btn}
            </NavBarButton>
          </RedirectLink>
        ))}
      <NavBarIconContainer>
        <ProfileIconContainer>
          <NavBarIcon type={icons[0].type} />
          <RightMenuDropDown>
            <ProfileMenu logout={props.onLogout} />
          </RightMenuDropDown>
        </ProfileIconContainer>
        <NavBarIcon type={icons[1].type} onClick={icons[1].onClick} />
      </NavBarIconContainer>
    </Wrapper>
  );
});
