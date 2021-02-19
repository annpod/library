import { HTMLAttributes } from 'react';

interface IThemeMap {
  [key: string]: string;
}

export interface IStyledProps extends HTMLAttributes<HTMLDivElement> {
  theme: IThemeMap;
  className?: string;
  children?: any;
  onClick?: any;
}
