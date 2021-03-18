import React, { ReactNode } from 'react';

import { Button } from '../button';
import { TextIconButton, TextWrapper } from './tab-button.styled';

export interface ITabButtonProps {
  section: string;
  currentSection?: string;
  title: string;
  className?: string;
  disabled?: boolean;
  onClick: (section: string) => void;
  selected?: boolean
}

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

export interface IIconTextTabButtonProps extends ITabButtonProps {
  icon: ReactNode;
}

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
