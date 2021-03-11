import styled from 'styled-components';

import Checkbox from 'antd/lib/checkbox';
import 'antd/lib/checkbox/style/css';

export const DeskFeatureStyles = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
  `,
  Label: styled.label`
    flex-grow: 1;
  `,
  Icon: styled.img`
    width: 30px;
    height: 30px;
  `,
  IconWrapper: styled.div`
    margin-right: 12px;
  `,
  Checkbox: styled(Checkbox)`
    margin-right: 24px;

    & .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #434448;
      border-color: #434448;
    }

    & .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    .ant-checkbox-input:focus + .ant-checkbox-inner {
      border: 1px solid #d9d9d9;
    }
  `,
  CheckboxWrapper: styled.div`
    background-color: #efefef;
    width: 100%;
    height: 44px;
    border: 1px solid #f9f9f9;
    margin-bottom: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 16px;
    padding-right: 32px;
    font-size: 12px;
    font-weight: 400;

    & > label {
      font-size: 12px;
    }
  `,
};
