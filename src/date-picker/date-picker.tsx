import * as React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import AntdDatepicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';
import { DATE_FORMAT } from '../constants/date';

export interface IDatePickerProps {
  label?: string;
  placeholder: string;
  value?: moment.Moment | null;
  onChange?: (value: string) => void;
  onChangeMoment?: (value: moment.Moment | null) => void;
  minDate: moment.Moment;
  maxDate: moment.Moment;
  allowClear: boolean;
  isDisabled?: boolean;
}

const DatePickerStyled = {
  DatePicker: styled(AntdDatepicker)`
    && {
      .ant-input {
        border: 1px solid #cccccc;
        font-size: 13px;
        width: 215px;
        height: 36px;
        padding: 0 10px;
        font-size: 13px;
      }
      .ant-input::placeholder {
        color: #999999;
      }
      .ant-calendar-picker-icon {
        z-index: 0;
      }
    }
  `,
  Label: styled.div`
    font-size: 13px;
    margin: 10px 0;
  `,
};

export const Datepicker = (props: IDatePickerProps) => {
  const onChangeDate = (value: moment.Moment | null) => {
    if (props.onChange) {
      const res = value ? value.format(DATE_FORMAT.api) : '';
      props.onChange(res);
    }

    if (props.onChangeMoment) {
      props.onChangeMoment(value);
    }
  };

  const isDisabledDate = (date: moment.Moment | null) => {
    if (!date) {
      return true;
    }
    if (date.isBefore(props.minDate, 'd')) {
      return true;
    }
    if (date.isAfter(props.maxDate, 'd')) {
      return true;
    }
    return false;
  };

  return (
    <div>
      {props.label && (
        <DatePickerStyled.Label>{props.label}</DatePickerStyled.Label>
      )}
      <DatePickerStyled.DatePicker
        placeholder={props.placeholder}
        onChange={onChangeDate}
        value={props.value}
        format={DATE_FORMAT.datepicker}
        disabledDate={isDisabledDate}
        allowClear={props.allowClear}
        disabled={props.isDisabled}
      />
    </div>
  );
};
