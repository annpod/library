import * as React from 'react';
import styled from 'styled-components';
import { ThemeTypes } from '../typings';

export interface IMonetaryProps {
  value: string;
  name: string;
  label?: string;
  min?: string;
  max?: string;
  step?: string;
  disabled?: boolean;
  onChange: (name: string, value: string) => void;
}

const Wrapper = (themeType: ThemeTypes) => {
  return function Component(props: IMonetaryProps) {
    const { value, name, min, max, step, disabled, onChange } = props;

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
      <Container data-location="monetary">
        {props.label && <Label>{props.label}</Label>}
        <Input
          name={name}
          step={step || '0.01'}
          onChange={onMoneyChange}
          type='number'
          value={value}
          onBlur={onBlur}
          themeType={themeType}
          min={min}
          max={max}
          disabled={disabled}
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
  font-size: 12px;
  min-width: 80px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;  
`;

const Input = styled.input<{ themeType: ThemeTypes }>`
  width: 86px;
  border: 1px solid ${(props) => props.theme.numberBorderColor};
  border-radius: 5px;
  height: 36px;
  padding-left: 5px;
  color: ${(props) => props.theme.numberTextColor};
  background-color: ${(props) => props.theme.numberBgColor[props.themeType]};
  font-family: 'Gotham-book';
  font-size: 12px;
  outline: none !important;
`;
