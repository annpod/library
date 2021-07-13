import React from 'react';
import { Radio } from 'antd';
import { RadioChangeEvent } from 'antd/lib/radio';
import styled from 'styled-components';
import { IRadioGroupOption, IRadioGroupProps } from '../typings';

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Gotham-Book';
  background: ${(props) => props.theme.elementBg};
  color: ${(props) => props.theme.textColor};
  width: 100%;
  height: 36px;
  margin-bottom: 5px;
  margin-left: 0px;
  padding: 0px 13px;
  font-size: 12px;
  border-radius: 5px;

  span {
    font-size: 12px;
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #cccccc;

    &:after {
      background-color: #707070;
    }
  }
`;

const RadioGroupC = styled(Radio.Group)`
  width: 100%;
`;

const Tooltip = styled.div<{ show: Boolean }>`
  font-size: 11px;
  font-family: Gotham-Medium;
  color: ${(props) => props.theme.tooltip};
  margin: 10px 5px 20px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const RadioGroup = (props: IRadioGroupProps) => {
  const onChange = (event: RadioChangeEvent) => {
    props.onChange(event);
  };

  const showTooltip = (option: IRadioGroupOption) =>
    Boolean(option.tooltip && props.value === option.key);

  return (
    <RadioGroupC onChange={onChange} value={props.value} name={props.name}>
      {props.options.map((option: IRadioGroupOption) => (
        <React.Fragment key={option.key}>
          <RadioContainer>
            <Radio value={option.key}>{option.name}</Radio>
          </RadioContainer>

          <Tooltip show={showTooltip(option)}>{option.tooltip}</Tooltip>
        </React.Fragment>
      ))}
    </RadioGroupC>
  );
};
