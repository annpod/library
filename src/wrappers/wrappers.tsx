import React from 'react';
import styled from 'styled-components';

import { WrapperType, IWrapper } from '../typings';

const { div } = styled;
const sizeMap = {
  [WrapperType.Small]: '10px',
  [WrapperType.Medium]: '20px',
  [WrapperType.Large]: '30px',
};

const getValue = (size: WrapperType, val?: string | boolean) => {
  if (!val) return '0';
  if ('boolean' === typeof val) {
    return sizeMap[size];
  }
  return val;
};

const WrapperComponent = (wrapType: WrapperType) => (props: any) => {
  return (
    <WrapperC size={wrapType} {...props}>
      {props.children}
    </WrapperC>
  );
};

const WrapperC = div<IWrapper>`
  ${(props) => `
    margin-top: ${getValue(props.size, props.mtop)};
    margin-bottom: ${getValue(props.size, props.mbottom)};
    margin-left: ${getValue(props.size, props.mleft)};
    margin-right: ${getValue(props.size, props.mright)};
    padding-top: ${getValue(props.size, props.ptop)};
    padding-bottom: ${getValue(props.size, props.pbottom)};
    padding-left: ${getValue(props.size, props.pleft)};
    padding-right: ${getValue(props.size, props.pright)};
  `}
`;

export const Wrapper = {
  Small: WrapperComponent(WrapperType.Small),
  Medium: WrapperComponent(WrapperType.Medium),
  Large: WrapperComponent(WrapperType.Large),
};
