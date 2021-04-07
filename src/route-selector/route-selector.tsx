import React from 'react';

import { RouteSelectorBody } from './route-selector.styled';
import { RouteSelectorButton } from './route-selector.button';
import { IconMap } from './route-selector.constants';

const getIcon = (selector: string, selected: boolean) => {
  const Component = IconMap[selector];
  return <Component selected={selected} />;
};

export const RouteSelector = (props: any) => {
  const isSelectedSector = (current: string) => {
    return current === props.selector;
  };

  return (
    <RouteSelectorBody>
      {props.buttons
        .filter((el: any) => props.routes.includes(el.route))
        .map((button: any, index: number) => (
          <RouteSelectorButton
            key={index}
            selected={isSelectedSector(button.selector)}
            icon={getIcon(button.selector, isSelectedSector(button.selector))}
            onClick={props.redirect(button.route)}
          />
        ))}
    </RouteSelectorBody>
  );
};
