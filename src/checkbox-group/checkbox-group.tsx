import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { ICheckboxGroupProps, ICheckboxGroupOption } from '../typings';

export const CheckboxGroup = (props: ICheckboxGroupProps) => {
  return (
    <CheckboxGroupC
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    >
      {props.options.map((option: ICheckboxGroupOption) => {
        return (
          <CheckboxC key={option.key} value={option.key}>
            <span>{option.name}</span>
            {option.rightSideValue ? (
              <span>{option.rightSideValue}</span>
            ) : null}
          </CheckboxC>
        );
      })}
    </CheckboxGroupC>
  );
};

const CheckboxGroupC = styled(Checkbox.Group)`
  display: flex;
  flex-direction: column;
  font-family: 'Gotham-Book';
  flex: 1;
  font-size: 12px;
  color: ${(props) => props.theme.textColor};

  label > span:nth-child(2) {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }

  .ant-checkbox-wrapper {
    margin-left: 0px;
  }
`;

const CheckboxC = styled(Checkbox)`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.elementBg};
  height: 36px;
  margin: 0px 0px 5px 0px;
  padding: 0px 13px;
  border-radius: 5px;
  font-size: 13px;
`;
