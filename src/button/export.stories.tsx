import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ExportBtn } from './export';
import { IExportButton } from '../typings';

export default {
  title: 'Deprecated/ExportButton',
  component: ExportBtn,
  parameters: {
    docs: {
      description: {
        component: 'Use ButtonStyled.Grey'
      }
    }
  }
} as Meta;

const Template: Story<IExportButton> = (args) => (
  <ExportBtn {...args}>{args.children}</ExportBtn>
);

export const Primary = Template.bind({});

Primary.args = {
  disabled: false,
  children: 'Download XLS',
  onClick: () => {}
};
