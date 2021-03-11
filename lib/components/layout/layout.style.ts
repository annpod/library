import styled from 'styled-components';

import { mediaStyled } from '../../styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: auto;
  background: none;

  ${mediaStyled.tablet`
      padding: 0;
      border-radius: 0;
    `};

  ${mediaStyled.desktop`
      padding: 30px;
      border-radius: 5px;
    `};
`;
