import * as React from 'react';
import styled from 'styled-components';
import { NavBarButton } from './nav-bar-btn';
import { NavBarIcon, NavBarIconContainer } from './nav-bar-icon';
import { IHeaderOption } from '../../../typings';
import ProfileMenu from './profile-menu';

const Wrapper = styled.div`
  flex-direction: row;
  align-items: center;
  height: 100%;
  display: flex;
`;

const RightMenuDropDown = styled.div`
  position: absolute;
  top: 30px;
  width: 154px;
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.2s, opacity 0.2s ease-in-out;
  right: -66px;
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
  height: 25px;
  position: relative;
`;

const RedirectLink = styled.a``;

export interface INavBarProps {
  headerOptions: IHeaderOption[];
  activeHeader: string | null;
  isProfile?: boolean;
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
        (window.location.href = 'https://www.smartspaceglobal.com/help')
    }
  ];

  return (
    <Wrapper>
      {props.headerOptions && props.headerOptions.length
        ? props.headerOptions
            .filter((e) => e.btn !== 'Help')
            .sort((a, b) => a.order - b.order)
            .map(({ btn, route }, index) => (
              <RedirectLink href={route} key={index}>
                <NavBarButton
                  isActive={
                    !!(props.activeHeader && btn === props.activeHeader)
                  }
                >
                  {btn}
                </NavBarButton>
              </RedirectLink>
            ))
        : null}
      <NavBarIconContainer>
        <ProfileIconContainer>
          <NavBarIcon type={icons[0].type} />
          <RightMenuDropDown>
            <ProfileMenu isProfile={props.isProfile} logout={props.onLogout} />
          </RightMenuDropDown>
        </ProfileIconContainer>
        <NavBarIcon type={icons[1].type} onClick={icons[1].onClick} />
      </NavBarIconContainer>
    </Wrapper>
  );
});
