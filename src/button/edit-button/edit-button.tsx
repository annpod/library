import React from 'react';
import styled from 'styled-components';

import { Icon } from '../../icon';

interface IEditButtonProps {
  itemCountString: string | null;
  resetKeys: () => void;
  onClick: () => void;
}

export const EditButton = (props: IEditButtonProps) => {
  const { itemCountString = null, resetKeys } = props;

  return (
    <Transistion className={itemCountString ? 'fade-in' : 'fade-out'}>
      <OpenFlyout onClick={props.onClick}>{itemCountString}</OpenFlyout>
      <ClearSelected onClick={resetKeys}>
        <Circle>
          <Icon type={'cross'} />
        </Circle>
      </ClearSelected>
    </Transistion>
  );
};

const Transistion = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  transform-origin: 50% 50%;
  margin-right: 10px;

  &.fade-in {
    animation: slide-up-fade-in ease 500ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  @keyframes slide-up-fade-in {
    0% {
      opacity: 0;
      transform: translate(0px, 40px);
    }
    100% {
      opacity: 1;
      transform: translate(0px, 0px);
    }
  }
`;

const Circle = styled.div`
  background: #ffffff;
  border-radius: 100%;
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OpenFlyout = styled.button`
  border-top-left-radius: 19px;
  border-bottom-left-radius: 19px;
  border: none;
  background: ${(props) => props.theme.buttons.primary.background};
  font-size: 13px;
  color: ${(props) => props.theme.buttons.primary.color};
  height: 29px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  padding-right: 7px;
  white-space: nowrap;
  &:hover {
    color: ${(props) => props.theme.buttons.primary.color};
  }
`;

const ClearSelected = styled.div`
  width: 30px;
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  background: ${(props) => props.theme.buttons.primary.background};
  font-size: 13px;
  color: ${(props) => props.theme.buttons.primary.color};
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  cursor: pointer;
`;
