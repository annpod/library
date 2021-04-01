import styled from 'styled-components';
import { theme } from '../themes/theme';

import { IStyledProps } from '../typings/styles';

export interface IButton extends IStyledProps {
  color: string;
  background: string;
}

export const Button = styled.button<IButton>`
  height: 35px;
  min-width: 165px;
  width: auto;
  font-size: ${(props) => props.theme.headerFontSize};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 18px;
  outline: none;
  cursor: pointer;
  transition: 0.3s all;
  white-space: nowrap;
  padding: 0 20px;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  &:disabled {
    cursor: not-allowed;
    opacity: 0.15;
  }
`;
