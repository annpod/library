import * as React from 'react';
import styled from 'styled-components';
import Select from 'antd/lib/select';
import { Form } from 'antd';
import { IHashMap } from '../typings';

export interface IStatusSelect {
  isNewDesk: boolean;
  // deskName?: string;
  form: any;
  initialValue: any;
  id: any;
  label: any;
  rules: any;
  disabled: any;
  placeholder: any;
  onChangeStatus: any;
}

const optionsMap: IHashMap<string[]> = {
  Active: ['Unavailable'],
  Archived: ['Active'],
  Unavailable: ['Active', 'Archived']
};

export const StatusSelect = (props: IStatusSelect) => {
  const { initialValue } = props;

  const value = props.form.getFieldValue(props.id) || initialValue;

  const options = optionsMap[value] || [];

  return (
    <HeaderItemBox label={props.label}>
      {props.form.getFieldDecorator(props.id, {
        initialValue: props.initialValue || undefined,
        rules: props.rules
      })(
        <GreenSelect
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={props.onChangeStatus}
        >
          {options.map((label: string) => (
            <Select.Option key={`${props.id}_${label}`} value={label}>
              <GreenSelectOption>{label}</GreenSelectOption>
            </Select.Option>
          ))}
        </GreenSelect>
      )}
    </HeaderItemBox>
  );
};

const GreenSelect: new <T>() => Select<T> = styled(Select)`
  color: white;
  min-width: 164px;
  height: 36px;
  box-shadow: none;
  border: none !important;

  & > .ant-select-selection {
    background-color: ${(props) => props.theme.statusButtonBg};
    border: none;
    height: 36px;
    border-radius: 18px;
    padding: 10px;
    font-size: 14px;
    display: flex;
    align-items: center;
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

const HeaderItemBox = styled(Form.Item)`
  margin: 0;
  margin-left: 20px;
  padding: 0 !important;
`;
