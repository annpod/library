import * as React from 'react';
import styled from 'styled-components';
import Select, { SelectProps } from 'antd/lib/select';
import { Form } from 'antd';
import { IHashMap } from '../typings';

const optionsMap: IHashMap<string[]> = {
  Active: ['Unavailable', 'Active'],
  Archived: ['Active', 'Archived'],
  Unavailable: ['Active', 'Archived', 'Unavailable'],
  New: ['Active', 'New']
};

interface ISelect extends SelectProps {
  slim?: boolean;
}

export const StatusSelect = (props: any) => {
  const value = props.form.getFieldValue(props.id) || props.initialValue;
  const optionMap = props.options || optionsMap;
  const options = props.initialValue ? optionMap[props.initialValue] : [];

  return (
    <HeaderItemBox label={props.label} slim={props.slim}>
      {props.form.getFieldDecorator(props.id, {
        initialValue: props.initialValue || undefined,
        rules: props.rules
      })(
        <GreenSelect
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={props.onChange}
          slim={props.slim}
        >
          {options
            .filter((item: string) => item !== value)
            .map((item: string) => (
              <Select.Option key={`${props.id}_${item}`} value={item}>
                <GreenSelectOption>{item}</GreenSelectOption>
              </Select.Option>
            ))}
        </GreenSelect>
      )}
    </HeaderItemBox>
  );
};

const GreenSelect = styled(Select)<ISelect>`
  color: white;
  min-width: 164px;
  height: ${(props) => (props.slim ? '29px' : '36px')};
  box-shadow: none;
  border: none !important;
  & > .ant-select-selection {
    background-color: ${(props) => props.theme.statusButtonBg};
    border: none;
    height: ${(props) => (props.slim ? '29px' : '36px')};
    line-height: ${(props) => (props.slim ? '28px' : '36px')};
    border-radius: ${(props) => (props.slim ? '15px' : '18px')};
    padding: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  & .ant-select-selection__rendered {
    line-height: ${(props) => (props.slim ? '28px' : '36px')};
  }
  & > .ant-select-selection:hover,
  & > .ant-select-selection:active,
  & > .ant-select-selection:focus {
    border: none;
    box-shadow: none;
    --antd-wave-shadow-color: transparent;
  }

  & .ant-select-arrow {
    color: white;
  }

  & .ant-select-selection__placeholder {
    color: white;
    top: 60%;
  }
` as any;

const GreenSelectOption = styled.span`
  font-size: 14px;
  font-weight: 400;

  .ant-select-selection-selected-value > & {
    line-height: 36px;
  }
`;

const HeaderItemBox = styled(Form.Item)<{slim: boolean}>`
  margin: 0;
  margin-left: 20px;
  padding: 0 !important;
  line-height: ${(props) => (props.slim ? '28px' : '36px')};
  .ant-form-item-control {
    line-height: ${(props) => (props.slim ? '28px' : '36px')};
  }
`;
