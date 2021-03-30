import styled from 'styled-components';
import { Icon } from '../../../icon';
import { GREY_COLOR } from '../../../constants/colors';

export const NavBarIconContainer = styled.div`
  border-left: 1px solid ${GREY_COLOR};
  display: flex;
  flex-direction: row;
  height: 34px;
  align-items: center;
`;

export const NavBarIcon = styled(Icon)`
  margin-left: 20px;
  & > img {
    width: 25px;
  }
  &:hover {
    cursor: pointer;
  }
`;
