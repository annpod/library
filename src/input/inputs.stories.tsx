import React from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputStyled } from './inputs';
import { IInputsProps } from '../typings';

export default {
  title: 'V1/InputStyled',
  component: InputStyled.Primary,
  parameters: {
    docs: {
      description: {
        component: `
        <InputStyled.Primary /> 

        <InputStyled.Dark />`
      },
      source: {
        code: `<InputStyled.Primary
          label={label}
          labelRight={false}
          labelWidth={'200px'}
          className='input',
          type='text',
          large={true},
          placeholder='placeholder',
          value={value},
          name='name',
          isError={isError},
          errorMessage={errorMessage},
          isErrorIcon={false},
          disabled={isDisabled},
          min={min},
          max={max},
          onChange={onChange}        
      />`
      }
    }
  }
} as Meta;

const Template1: Story<IInputsProps> = (args) => (
  <>
  <Wrapper>
    <InputStyled.Primary {...args} />
    
  </Wrapper>
    <Wrapper>
    <InputStyled.Primary {...args} />
    
  </Wrapper>
  </>
);


export const Primary = Template1.bind({});

Primary.args = {
  label: 'Label',
  labelRight: true,
  labelWidth: '200px',
  className: 'input',
  type: 'text',
  large: true,
  placeholder: '',
  value: 'text',
  name: 'name',
  isError: false,
  errorMessage: '',
  isErrorIcon: false,
  disabled: false,
  min: '',
  max: '',
  onChange: () => { }
};

const Template2: Story<IInputsProps> = (args) => (
  <Wrapper>
    <InputStyled.Dark {...args} />
  </Wrapper>
);

export const Dark = Template2.bind({});

Primary.args = {
  label: 'Label',
  labelRight: true,
  labelWidth: 'auto',
  className: 'input',
  type: 'text',
  large: true,
  placeholder: '',
  value: 'text',
  name: 'name',
  isError: false,
  errorMessage: '',
  isErrorIcon: false,
  disabled: false,
  min: '',
  max: '',
  onChange: () => { }
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`;
