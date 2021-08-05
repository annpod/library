import React from 'react';
import { Icon } from '../icon';
import { components, IndicatorProps } from 'react-select';
import styled from 'styled-components';
import { ISelectOption } from '../typings';

export const DropdownIndicator = (
  props: IndicatorProps<ISelectOption, boolean>
): React.ReactElement => {
  if (props.selectProps.isDisabled) {
    return (
      <components.DropdownIndicator {...props}>
        <CollapseIconDisabled type={'downArrow'} />
      </components.DropdownIndicator>
    );
  }
  return (
    <components.DropdownIndicator {...props}>
      <CollapseIcon type={'downArrow'} />
    </components.DropdownIndicator>
  );
};

const CollapseIcon = styled(Icon)`
  width: 11px;
  height: 6px;
`;

const CollapseIconDisabled = styled(Icon)`
  width: 11px;
  height: 6px;
  opacity: 0.3;
`;
