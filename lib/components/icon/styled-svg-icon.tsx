import * as React from 'react';

import styled from 'styled-components';

interface SvgIconStyledProps {
  Icon: any;
  selected: boolean;
  fillCircle?: boolean;
}

export const SvgIconStyled = ({
  Icon,
  selected,
  fillCircle,
}: SvgIconStyledProps) => {
  const Styled = styled<any>(Icon)`
    ${({ selected, theme: { highlightColor } }) => {
      return selected
        ? `& g>*{stroke: ${highlightColor};} ${
            fillCircle ? `& g>circle{fill:${highlightColor}}` : ''
          }`
        : '';
    }}
    width: 1rem;
    height: 1rem;
  `;
  return <Styled selected={selected} />;
};
