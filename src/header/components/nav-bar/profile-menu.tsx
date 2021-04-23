import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const menu = [
  { title: 'Edit profile', link: `${window.location.origin}/profile` },
  { title: 'Log out', link: '' },
];

interface IProfileMenu {
  logout: () => void;
  isProfile?: boolean;
};
const ProfileMenu = (props: IProfileMenu) => {
  const logoutFromProfile = () => {
    props.logout();
  };

  return (
    <Wrapper>
      <TriangleWrapper />
      <List>
        {props.isProfile && <EditProfileLink href={menu[0].link}>{menu[0].title}</EditProfileLink>}
        <Item onClick={logoutFromProfile}>{menu[1].title}</Item>
      </List>
    </Wrapper>
  );
};

export default ProfileMenu;

const EditProfileLink = styled.a`
  padding: 15px 20px;
  background: #dbdbdb;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  text-transform: capitalize;
  color: #434447;
  transition: all 0.2s ease-in-out 0s;
  &:visited {
    color: #434447;
  }
  &:hover {
    color: ${(props) => props.theme.linkColor};
    background: #fff;
  }
  &:active {
    color: ${(props) => props.theme.linkColor};
  }
`;
const Wrapper = styled.div``;

const List = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 124px;
  margin-left: 15px;
  border-bottom: 1px solid #efefef;
  border-right: 1px solid #efefef;
  cursor: pointer;
`;
const Item = styled.div`
  padding: 15px 20px;
  background: #dbdbdb;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9em;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    color: ${(props) => props.theme.linkColor};
    background: #fff;
  }
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  margin: 0 auto;
  border-style: solid;
  border-width: 0 12px 12px 12px;
  cursor: pointer;
  border-color: transparent transparent #dbdbdb transparent;
`;

const TriangleWrapper = styled(Triangle as any)`
  &:hover + ${List} {
    background: #fff;
  }
`;
