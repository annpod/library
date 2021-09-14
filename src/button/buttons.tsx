import React from 'react';
import styled from 'styled-components';
import { BtnTypes } from '../typings';

interface ButtonProps {
  btnType: BtnTypes;
  disabled: boolean;
  slim: boolean;
}

const ButtonWrapper = styled.div<ButtonProps>`
  min-width: 81px;
  cursor: pointer;
  height: ${(props) => (props.slim ? '29px' : ' 36px')};
  font-size: 12px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  padding: 0px 10px;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.buttons[props.btnType].backgroundDisabled
      : props.theme.buttons[props.btnType].background || 'transparent'};
  color: ${(props) => props.theme.buttons[props.btnType].color};
`;

const Text = styled.span`
  pointer-events: none;
`;

export interface IProps {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  slim?: boolean;
}

const Wrapper =
  (btnType: BtnTypes) =>
  ({ onClick, children, disabled = false, slim = false }: IProps) => {
    return (
      <ButtonWrapper
        btnType={btnType}
        onClick={disabled ? () => null : onClick}
        disabled={disabled}
        slim={slim}
        data-location={btnType}
      >
        <Text>{children}</Text>
      </ButtonWrapper>
    );
  };

export const ButtonStyled = {
  Primary: Wrapper(BtnTypes.Primary),
  Dark: Wrapper(BtnTypes.Dark),
  Light: Wrapper(BtnTypes.Light),
  Blue: Wrapper(BtnTypes.Blue),
  Small: Wrapper(BtnTypes.Small)
};
