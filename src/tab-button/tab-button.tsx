import React from 'react';

import { Button } from '../button';
import { TextIconButton, TextWrapper } from './tab-button.styled';
import { ITabButtonProps, IIconTextTabButtonProps } from '../typings';

export const TabButton = (props: ITabButtonProps) => {
  const { title, disabled, section, className } = props;

  const onClick = () => {
    props.onClick(section);
  };

  return (
    <Button onClick={onClick} className={className} disabled={disabled}>
      {title}{' '}
    </Button>
  );
};

export const IconTextTabButton = (props: IIconTextTabButtonProps) => {
  const { icon, title, disabled, section, className } = props;

  const onClick = () => {
    props.onClick(section);
  };
  
  return (
    <TextIconButton onClick={onClick} className={className} disabled={disabled}>
      {icon}
      <TextWrapper>{title} </TextWrapper>
    </TextIconButton>
  );
};
