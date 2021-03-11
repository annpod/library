import styled from 'styled-components';
import { SaveBtn } from './save';

export const ExportBtn = styled(SaveBtn)`
  min-width: auto;
  margin-right: 10px;
  transition: 0.5s all;
  white-space: nowrap;
  &:last-of-type {
    margin: 0;
  }
`;
