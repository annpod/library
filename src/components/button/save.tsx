import styled from 'styled-components';
import { Button } from './button';

export const SaveBtn = styled(Button)`
  color: white;
  background-color: #434448;
  width: auto;
  min-width: 164px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 33px;
  border: 0;
  box-shadow: none;
  font-size: 14px;

  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: #434448;
    --antd-wave-shadow-color: transparent;
  }
`;
