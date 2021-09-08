import * as React from 'react';
import styled from 'styled-components';
import { ThemeTypes } from '../typings';

export interface IMonetaryProps {
  value: string;
  name: string;
  onChange: (name: string, value: string) => void;
}

const Wrapper = (themeType: ThemeTypes) => {
  return function Component(props: IMonetaryProps) {
    const { value, name, onChange } = props;

    const onMoneyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name;
      const input = event.target.value;

      onChange(name, input);
    };

    const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = Number(event.target.value).toFixed(2);
      onChange(name, input);
    };

    return (
      <Container>
        <Label>Cost (£)</Label>
        <Input
          name={name}
          step='0.01'
          onChange={onMoneyChange}
          type='number'
          value={value}
          onBlur={onBlur}
          themeType={themeType}
        />
      </Container>
    );
  };
};

export const Monetary = {
  Primary: Wrapper(ThemeTypes.Primary),
  Dark: Wrapper(ThemeTypes.Dark)
};

const Label = styled.label`
  font-size: 13px;
  width: 80px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input<{ themeType: ThemeTypes }>`
  width: 86px;
  margin-right: 10px;
  border: 1px solid ${(props) => props.theme.numberBorderColor};
  border-radius: 5px;
  height: 36px;
  padding-left: 5px;
  color: ${(props) => props.theme.numberTextColor};
  background-color: ${(props) => props.theme.numberBgColor[props.themeType]};
  font-family: 'Gotham-book';
  font-size: 12px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0px;
  }
`;
