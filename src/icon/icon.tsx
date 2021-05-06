import * as React from 'react';
import styled from 'styled-components';

import { ICONS } from './icons';

export interface IIconProps extends React.HTMLAttributes<HTMLElement> {
  type: string;
  size?: number;
  className?: string;
}

const Wrapper = styled.div`
  display: flex;
`;

export const Icon = ({ type, className, onClick, size }: IIconProps) => {
  if (!ICONS[type]) {
    return null;
  }

  const onPress = (e: any) => onClick && onClick(e);

  const style = size ? { width: size, height: size } : {};

  return (
    <Wrapper className={className} onClick={onPress}>
      <img src={ICONS[type]} style={style} alt={`icon-${type}`} />
    </Wrapper>
  );
};
