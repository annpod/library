import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { SaveBtn } from './save';

export default {
  title: 'Deprecated/SaveBtn',
  component: SaveBtn,
  parameters: {
    docs: {
      description: {
        component: 'Use ButtonStyled.Primary'
      }
    }
  }
} as Meta;

const Template: Story<any> = (args) => (
  <SaveBtn {...args}>{args.children}</SaveBtn>
);

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  children: 'Save',
  onClick: () => {}
};
