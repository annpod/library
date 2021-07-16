import * as React from 'react';
import styled from 'styled-components';

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

export const Number = (props: INumberProps): React.ReactElement => {
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
    const targetValue = parseInt(value, 10) + 1;

    if (max && +targetValue > +max) return;

    props.onChange(props.name, targetValue.toString());
  };

  const decrement = () => {
    const targetValue = parseInt(value, 10) - 1;

    if (min && +targetValue < +min) return;

    props.onChange(props.name, targetValue.toString());
  };

  return (
    <InputWrapper width={width}>
      <Label>{label}</Label>
      <div>
        <Input value={value} onChange={onChange} type='number' />
        <DecrementBtn onClick={decrement}>
          <span>-</span>
        </DecrementBtn>
        <IncrementBtn onClick={increment}>
          <span>+</span>
        </IncrementBtn>
      </div>
    </InputWrapper>
  );
};

const InputWrapper = styled.div<{ width?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => (props.width ? `${props.width}px` : '250px')};
`;

const Label = styled.div`
  color: ${(props) => props.theme.numberTextColor};
`;

const Input = styled.input`
  width: 36px;
  margin-right: 10px;
  border: 1px solid ${(props) => props.theme.numberBorderColor};
  border-radius: 5px;
  height: 28px;
  padding-left: 5px;
  color: ${(props) => props.theme.numberTextColor};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0px;
  }
`;

const Button = styled.button`
  width: 28px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.numberBorderColor};
  color: ${(props) => props.theme.numberTextColor};
  background: ${(props) => props.theme.numberBgColor};
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
