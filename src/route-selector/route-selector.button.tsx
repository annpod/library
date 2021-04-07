import React, { ReactNode } from 'react';
import { RouteSelectorButtonBody } from './route-selector.styled';

export interface IRouteSelectorButtonProps {
  selected?: boolean;
  icon: ReactNode;
  onClick?: () => void;
}

export const RouteSelectorButton = (props: IRouteSelectorButtonProps) => {
  return (
    <RouteSelectorButtonBody
      selected={!!props.selected}
      onClick={props.onClick}
    >
      {props.icon}
    </RouteSelectorButtonBody>
  );
};
