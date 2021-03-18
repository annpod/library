import styled from 'styled-components';

import Select from 'antd/lib/select';
import { theme } from '../../../constants/theme';
import { Form } from 'antd';

export const HeaderItemBox = styled(Form.Item)`
  margin: 0;
  margin-left: 20px;
  padding: 0 !important;
`;

export const Wrapper = styled.div``;

export const GreenSelect: new <T>() => Select<T> = styled(Select)`
  color: white;
  min-width: 164px;
  height: 36px;
  box-shadow: none;
  border: none !important;

  & > .ant-select-selection {
    background-color: ${theme.statusButtonBg};
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

export const GreenSelectOption = styled.span`
  font-size: 14px;
  font-weight: 400;

  .ant-select-selection-selected-value > & {
    line-height: 36px;
  }
`;

export const ModalPopUpWrapper = styled.div``;
export const PopUpContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  text-align: center;
`;
