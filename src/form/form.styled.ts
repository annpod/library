import styled from 'styled-components';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import InputNumber from 'antd/lib/input-number';
import Form from 'antd/lib/form';
import Autocomplete from 'antd/lib/auto-complete';
import Checkbox from 'antd/lib/checkbox';
import { COAL_COLOR } from '../constants/colors';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/input-number/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/auto-complete/style/css';
import 'antd/lib/checkbox/style/css';

export const FormItemBox = styled(Form.Item)`
  max-width: 700px;
  margin: 5px 32px 10px;

  & > .ant-form-item-label > label {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const FormLabel = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

export const SimpleInput = styled(Input)`
  color: #636363;
  background-color: #f7f7f7;
  border: none;
  font-size: 12px;
  font-weight: 400;
  .gMkYKa {
    margin: 0px;
    padding: 0px;
  }
  &:focus {
    border: none;
    box-shadow: none;
  }
`;

export const AutocompleteInput = styled(Autocomplete)`
  color: #636363;
  background-color: #f7f7f7;
  border: none;
  font-size: 12px;
  font-weight: 400;
  .gMkYKa {
    margin: 0px;
    padding: 0px;
  }
  &:focus {
    border: none;
    box-shadow: none;
  }
`;

export const SimpleTextArea = styled(Input.TextArea)`
  color: #636363;
  background-color: #f7f7f7;
  border: none;
  font-size: 12px;
  font-weight: 400;

  &:focus {
    border: none;
    box-shadow: none;
  }
`;

export const AmountInput = styled(InputNumber)`
  font-size: 12px;
  font-weight: 400;
  max-width: 100px;
  margin-right: 15px;
`;

export const BasicSelect: new <T>() => Select<T> = styled(Select)`
  font-size: 12px;
  font-weight: 400;
` as any;

export const BasicSelectOption = styled.span`
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
`;

export const SelectColorBox = styled.div<{ backgroundColor: string }>`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  background-color: ${(props) => props.backgroundColor};
`;

export const FormPanelBody = styled.div`
  flex-grow: 1;
  background-color: white;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormSectionStart = styled.div`
  width: 100%;
  padding: 10px 32px;
  margin-top: 15px;
  margin-bottom: 25px;
  background-color: #f7f7f7;
  border-top: solid 2px #ededed;
  border-bottom: solid 2px #ededed;
  font-size: 14px;
  font-weight: 400;
`;

export const FormSectionStartNoTop = styled(FormSectionStart)`
  margin-top: 0px;
`;

export const FormSectionStartNoBottom = styled(FormSectionStart)`
  margin-bottom: 0px;
`;

export const FormSubsectionStart = styled.div`
  width: 100%;
  padding: 8px 32px;
  font-weight: bold;
  font-size: 13px;
`;

export const FormSectionDescription = styled.p`
  margin: 15px 32px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0 10px 15px;
  max-width: 700px;
`;

export const Title = styled.span`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.85);
  padding: 0 0 8px;
`;

export const InputCustom = styled.input`
  background: rgb(247, 247, 247);
  color: rgb(99, 99, 99);
  border: none;
  outline: none;
  padding: 4px 11px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  height: 32px;
`;

export const ErrorText = styled.span`
  color: rgb(245, 34, 45);
  margin-top: 2px;
`;

export const CheckboxCustom = styled(Checkbox)`
  &:hover,
  &:focus,
  &:focus:hover {
    &.ant-checkbox > .ant-checkbox-inner,
    & > .ant-checkbox.ant-checkbox-checked > .ant-checkbox-inner {
      border-color: ${COAL_COLOR};
      background-color: ${COAL_COLOR};
    }
  }
  & > .ant-checkbox,
  & > .ant-checkbox.ant-checkbox-checked {
    & > .ant-checkbox-input {
      &:focus,
      &:hover {
        & + .ant-checkbox-inner {
          border-color: ${COAL_COLOR};
        }
      }
    }
    &.ant-checkbox-checked > .ant-checkbox-inner,
    &.ant-checkbox-checked:hover > .ant-checkbox-inner,
    &:hover > .ant-checkbox-inner {
      border-color: ${COAL_COLOR};
      background-color: ${COAL_COLOR};
    }
  }
  & > span:last-child {
    color: rgb(99, 99, 99);
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;