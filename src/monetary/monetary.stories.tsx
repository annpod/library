import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { Monetary, IMonetaryProps } from './monetary';

export default {
  title: 'V1/Monetary',
  component: Monetary.Primary,
  parameters: {
    source: {
      type: 'code',
      code: `<Monetary.Primary 
        value={value.price} 
        onChange={onChange}
        label='Cost (£)'
        />
      `
    }
  }
} as Meta;

const Template: Story<IMonetaryProps> = (args) => {
  const [value, setValue] = React.useState<{ [x: string]: string }>({
    price: '10.34'
  });

  const onChange = (name: string, value: string) => {
    setValue({ [name]: value });
  };

  return (
    <Wrapper>
      <Monetary.Primary {...args} value={value.price} onChange={onChange} />
    </Wrapper>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  name: 'price',
  label: 'Cost (£)'
};

const Wrapper = styled.div`
  width: 240px;
`;
