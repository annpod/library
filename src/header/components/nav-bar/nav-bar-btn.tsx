import styled from 'styled-components';

import { IStyledProps } from '../../../typings/styles';

interface INavBarButtonProps extends IStyledProps {
  isActive: boolean;
}

export const NavBarButton = styled.div`
  height: 23px;
  padding: 0 5px;
  border-radius: 1rem;
  display: flex;
  border: 1px solid
    ${(props) => (props.isActive ? props.theme.mainTextColor : 'transparent')};
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.normalFontSize};
  color: ${(props: INavBarButtonProps) =>
    props.isActive ? props.theme.textColorMain : props.theme.textColorRegular};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 0 15px;
  font-weight: normal;

  &:nth-last-of-type(2) {
    &:after {
      border-right: 1px solid ${(props) => props.theme.borderColor};
      content: '';
      height: 30px;
      position: relative;
      left: 50px;
    }
  }
  &:last-of-type {
    margin-left: 20px;
  }

  :hover,
  :focus {
    color: ${(props) => props.theme.textColorMain};
  }
`;
