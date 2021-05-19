import React from "react";
import styled from "styled-components";
import { BtnTypes } from "../typings";

interface ButtonProps {
  btnType: BtnTypes;
  disabled?: boolean;
}

const ButtonWrapper = styled.div<ButtonProps>`
  min-width: 81px;
  cursor: pointer;
  height: 29px;
  font-size: 12px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  padding: 0px 10px;
  background-color: ${(props) => props.disabled ? "#DBDBDB" : props.theme.buttons[props.btnType].background};
  color: ${(props) => props.theme.buttons[props.btnType].color};
`;

const Text = styled.span`
  pointer-events: none;
`;

export interface IProps {
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Wrapper = (btnType: BtnTypes) => ({ onClick, children, disabled = false }: IProps) => {
  return (
    <ButtonWrapper btnType={btnType} onClick={disabled ? () => null : onClick} disabled={disabled}>
      <Text>{children}</Text>
    </ButtonWrapper>
  );
};

export const ButtonStyled = {
  Primary: Wrapper(BtnTypes.primary),
  Dark: Wrapper(BtnTypes.dark),
  Light: Wrapper(BtnTypes.light),
  Blue: Wrapper(BtnTypes.blue),
};
