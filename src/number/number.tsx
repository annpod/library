import * as React from 'react';
import styled from 'styled-components';
import { ThemeTypes } from '../typings';

export interface INumberProps {
  min?: string;
  max?: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  label?: string;
  width?: string;
}

const sliceLast = (str: string) => str.slice(0, -1);

const Wrapper = (themeType: ThemeTypes) => (
  props: INumberProps
): React.ReactElement => {
  const { min, max, value, label, width } = props;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const targetValue = event.currentTarget.value;

    if ((max && +targetValue > +max) || (min && +targetValue < +min)) {
      props.onChange(props.name, sliceLast(targetValue));
    } else {
      props.onChange(props.name, targetValue);
    }
  };

  const increment = () => {
    const targetValue = +value + 1;

    if (max && +targetValue > +max) return;

    props.onChange(props.name, targetValue.toString());
  };

  const decrement = () => {
    const targetValue = +value - 1;

    if (min && +targetValue < +min) return;

    props.onChange(props.name, targetValue.toString());
  };

  return (
    <InputWrapper width={width}>
      <Label>{label}</Label>
      <Flex>
        <Input value={value} onChange={onChange} type='number' />
        <DecrementBtn onClick={decrement} themeType={themeType}>
          <span>-</span>
        </DecrementBtn>
        <IncrementBtn onClick={increment} themeType={themeType}>
          <span>+</span>
        </IncrementBtn>
      </Flex>
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.width ? `${props.width}px` : '250px')};
`;

const Flex = styled.div`
  display: flex;
`;

const Label = styled.div`
  color: ${(props) => props.theme.numberTextColor};
  font-size: 12px;
  font-family: 'Gotham-Book';
`;

const Input = styled.input`
  width: 36px;
  margin-right: 10px;
  border: 1px solid ${(props) => props.theme.numberBorderColor};
  border-radius: 5px;
  height: 28px;
  padding-left: 5px;
  color: ${(props) => props.theme.numberTextColor};
  font-family: 'Gotham-book';
  font-size: 12px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0px;
  }
`;

const Button = styled.button<{ themeType: ThemeTypes }>`
  width: 28px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.numberBorderColor};
  color: ${(props) => props.theme.numberTextColor};
  background-color: ${(props) => props.theme.numberBgColor[props.themeType]};
  cursor: pointer;
  line-height: 24px;

  &:hover {
    background: ${(props) => props.theme.numberBgHoverColor};
  }
`;

const DecrementBtn = styled(Button)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const IncrementBtn = styled(Button)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Number = {
  Primary: Wrapper(ThemeTypes.Primary),
  Dark: Wrapper(ThemeTypes.Dark)
};
