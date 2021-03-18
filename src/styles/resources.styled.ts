// TODO after design will be ready, think about moving these styles to the global

import styled from 'styled-components';
import { Button } from '../button';
import { IconTextTabButton } from '../tab-button';
import { Icon } from '../icon';
import { IconButton } from '../icon-button/icon-button';
import Checkbox from 'antd/lib/checkbox';

const { div } = styled;

export const ResourcesInputNumbers = div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;
export const ContentWrapper = div`
  display: flex;
  flex: auto;
  background-color: white;
  border-radius: 5px;
  height: 100%;
`;

export const ListPageBodyPanel = div`
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 0 5px 5px 0;
`;

export const ListPageHeaderBox = div`
  padding: 18px 30px;
  display: flex;
  aling-items: center;
`;

export const ListPageSearchBox = div`
  background-color: #f7f7f7;
  padding: 18px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ListPageSearchLabel = div`
  font-size: 13px;
  font-weight: 400;
`;

export const ListPageSearchInputBox = div`
  width: 100%;
  display: flex;
`;

export const ListPageTableBox = div`
  flex: 1;
  padding: 12px;
`;

export const SectionSelectorBody = div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const SearchSelectBox = div`
  margin-top: 5px;
`;

export const RouteButton = styled(IconTextTabButton)`
  width: 100%;
  margin-top: 5px;
  background: none;
  padding: 0;
`;

export const SidePanelButton = styled(IconButton)`
  width: 100%;
  margin-top: 5px;
  background: none;
  padding: 0;
`;

export const MainBox = div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

export const FormTopBody = div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 78px;
  background-color: white;
  padding-left: 32px;
  padding-right: 18px;
`;

export const CancelBtn = styled(Button)`
  color: white;
  background-color: #434448;
  min-width: 25px;
  min-height: 25px;
  max-width: 25px;
  max-height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 0;
  box-shadow: none;

  &:hover,
  &:active,
  &:focus {
    color: white;
    background: #434448;
  }
`;

export const CancelIcon = styled(Icon)`
  & > path {
    color: white;
  }
`;

export const BackButtonContainer = div`
  padding: 0 0 5px 0;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`;

export const GlobalSeparator = div`
  height: 1px;
  background-color: #dbdbdb;
  margin: 5px;
`;

export const MainTitle = div`
  display: flex;
  align-items: center;
  height: 78px;
  background-color: white;
`;

export const MainTitleBody = div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
`;

export const MainTitleBox = div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 22px;
`;

export const MainTitleBoxNoLeft = styled(MainTitleBox)`
  padding: 0 22px 0 0;
`;

export const MainTitleName = div`
  color: #434448;
  font-size: 14px;
`;

export const SubTitle = div`
  min-height: 20px;
  font-size: 13px;
`;

export const MainTitleRegion = div`
  color: #434448;
  font-size: 12px;
  font-weight: 400;
`;

export const SaveBtn = styled(Button)`
  color: white;
  background-color: #434448;
  width: auto;
  min-width: 164px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 33px;
  border: 0;
  box-shadow: none;
  font-size: 14px;

  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: #434448;
    --antd-wave-shadow-color: transparent;
  }
`;

export const DeleteBtn = styled(SaveBtn)`
  background-color: #efefef;
  color: #434448;
  margin-left: 20px;
  &:hover,
  &:active,
  &:focus {
    background-color: #efefef;
    color: #434448;
  }
`;

export const CheckedInputStyles = {
  Wrapper: styled.div``,
  CheckboxLabel: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
  `,
  CheckboxWrapper: styled.div`
    background-color: #efefef;
    padding: 0px 15px;
    margin: 0 30px;
    width: 700px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    > div {
      width: 100%;
    }
  `,
  Checkbox: styled(Checkbox)`
    margin-right: 24px;

    & .ant-checkbox-inner {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      &:after {
        left: 30%;
      }
    }

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
};
