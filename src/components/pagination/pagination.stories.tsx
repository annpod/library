import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { StyledPagination, IPaginationProps } from './pagination';

export default {
   title: 'Example/Pagination',
   component: StyledPagination
} as Meta;


const Template: Story<IPaginationProps> = (args) => <StyledPagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  current: 1,
  defaultPageSize: 10,
  total: 100,
};
