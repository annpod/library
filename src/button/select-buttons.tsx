import React from 'react';
import styled from 'styled-components';
import { SelectBtnTypes } from '../typings';

interface ButtonProps {
  btnType: SelectBtnTypes;
  disabled: boolean;
}

const ButtonWrapper = styled.div<ButtonProps>`
  width: 130px;
  padding: 20px;
  text-align: center;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.selectButton[props.btnType].backgroundDisabled
      : props.theme.selectButton[props.btnType].background};
  color: ${(props) =>
    props.disabled
      ? props.theme.selectButton[props.btnType].colorDisabled
      : props.theme.selectButton[props.btnType].color};
  margin-right: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const Text = styled.span`
  pointer-events: none;
`;

export interface ISelectProps {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Wrapper =
  (btnType: SelectBtnTypes) =>
  ({ onClick, children, disabled = false }: ISelectProps) => {
    return (
      <ButtonWrapper
        btnType={btnType}
        onClick={disabled ? () => null : onClick}
        disabled={disabled}
        data-location={btnType}
      >
        <Text>{children}</Text>
      </ButtonWrapper>
    );
  };

export const SelectButton = {
  Primary: Wrapper(SelectBtnTypes.Primary)
};
