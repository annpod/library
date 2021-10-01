import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { IWrapper } from '../typings';
import { Wrapper } from './wrappers';

export default {
  title: 'Wrapper',
  component: Wrapper.Small,
  parameters: {
    docs: {
      source: {
        code: `<Wrapper.Small
        mtop={'20px'},
        mleft={true},
  >
    Close
  </Wrapper.Small>
  `
      },
      description: {
        component: `Wrapper.Small: 10px,   Wrapper.Medium: 20px,   Wrapper.Large: 30px,`
      }
    }
  }
} as Meta;

const Template: Story<IWrapper> = (args) => {
  return <Wrapper.Small {...args}>content</Wrapper.Small>;
};

export const Top = Template.bind({});

Top.args = {
  mtop: '20px',
  mleft: '20px',
  mright: '20px',
  mbottom: '20px',
  pleft: true,
  pright: true,
  ptop: true,
  pbottom: true
};
