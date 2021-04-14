import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';

import { ITimePeriodInputProps } from '../typings';

const TimePerionInputBody = styled.div`
  display: flex;
`;

const UnitsSelect: new <T>() => Select<T> = styled(Select)`
  font-size: 12px;
  font-weight: 400;
  max-width: 100px;
  width: 100%;
` as any;

export const TimePeriodInput = forwardRef<
  HTMLDivElement,
  ITimePeriodInputProps
>((props, ref) => {
  const { timePeriodData, someProps, onChange } = props;
  const provinceData = ['Minutes', 'Hours'];
  const [amount, setAmount] = useState(someProps.amount);
  const [units, setUnits] = useState(someProps.units);
  const [amountList, setAmountList] = useState(timePeriodData[someProps.units]);
  const AmountChange = (newAmount: any) => {
    onChange &&
      onChange({
        amount: Number(newAmount),
        units,
      });
    setAmount(newAmount);
  };
  const UnitsChange = (newUnit: string) => {
    setUnits(newUnit);
    setAmount(timePeriodData[newUnit][0]);
    setAmountList(timePeriodData[newUnit]);
    onChange &&
      onChange({
        amount: Number(amount),
        units: newUnit,
      });
  };

  return (
    <TimePerionInputBody ref={ref}>
      <UnitsSelect
        style={{ marginRight: '10px' }}
        value={amount}
        onChange={AmountChange}
      >
        {amountList.map((e: string) => (
          <Select.Option key={e}>{e}</Select.Option>
        ))}
      </UnitsSelect>
      <UnitsSelect
        defaultValue={someProps.units}
        style={{ width: 120 }}
        onChange={UnitsChange}
      >
        {provinceData.map((province) => (
          <Select.Option key={province}>{province}</Select.Option>
        ))}
      </UnitsSelect>
    </TimePerionInputBody>
  );
});
