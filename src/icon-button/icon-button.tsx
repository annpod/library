import React, { ReactNode } from 'react';
import { TextIconButton, TextWrapper } from './icon-button.styled';

export interface IIconButtonProps {
  icon: ReactNode;
  title?: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

export const IconButton = (props: IIconButtonProps) => {
  const { icon, title, disabled, className, onClick } = props;

  return (
    <TextIconButton
      onClick={onClick}
      className={className}
      disabled={disabled}
      data-location='icon-button'
    >
      {icon}
      {title && <TextWrapper>{title} </TextWrapper>}
    </TextIconButton>
  );
};
