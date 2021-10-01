import React from 'react';
// import { components } from 'react-select';
import { components, IndicatorProps } from 'react-select';
import { ISelectOption } from '../typings';

const ClearIcon = ({ color }: { color: string }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='7.914'
    height='7.914'
    viewBox='0 0 7.914 7.914'
  >
    <g
      id='Group_7851'
      data-name='Group 7851'
      transform='translate(-1945.983 -4100.736)'
    >
      <g id='Group_8104' data-name='Group 8104'>
        <line
          id='Line_526'
          data-name='Line 526'
          x1='5.793'
          y2='5.793'
          transform='translate(1947.043 4101.797)'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
        />
        <line
          id='Line_527'
          data-name='Line 527'
          x2='5.793'
          y2='5.793'
          transform='translate(1947.043 4101.797)'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeMiterlimit='10'
          strokeWidth='1.5'
        />
      </g>
    </g>
  </svg>
);

export const ClearIndicator = (
  props: IndicatorProps<ISelectOption>
): React.ReactElement => {
  const [hover, setHover] = React.useState(false);

  return (
    <components.DropdownIndicator {...props}>
      <div
        style={{ marginRight: '-5px' }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ClearIcon color={hover ? '#EE4656' : '#999'} />
      </div>
    </components.DropdownIndicator>
  );
};
