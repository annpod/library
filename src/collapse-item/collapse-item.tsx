import React, { useState, FunctionComponent } from 'react';
import { CollapseItemProps } from '../typings';

import {
  CollapseItemBody,
  CollapseTitleBody,
  CollapseContentBody,
  CollapseTitleText,
  CollapseTitleBtn,
} from './collapse-item.styled';



export const CollapseItem: FunctionComponent<CollapseItemProps> = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CollapseItemBody>
      <CollapseTitleBody>
        <CollapseTitleText>{props.title}</CollapseTitleText>
        <CollapseTitleBtn onClick={handleToggleCollapse}>
          {isOpen ? '\u2013' : '+'}
        </CollapseTitleBtn>
      </CollapseTitleBody>
      {isOpen && <CollapseContentBody>{props.children}</CollapseContentBody>}
    </CollapseItemBody>
  );
};
