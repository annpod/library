import React from 'react';

import { StyledPagination } from './pagination';
import { IPaginationProps } from './pagination.typings';



export const Pagination = (args: IPaginationProps) => (

      <StyledPagination
        {...args}
        current={args.current}
        setCurrentPage={() => {}}
      />
);

export default {
  title: 'Shared/Pagination',
  component: Pagination,
  args: {
    defaultPageSize: 10,
    total: 100,
    current: 1,
    setCurrentPage: (current: number) => {}
  },
  argTypes: {
    setCurrentPage: {
      table: {
        category: 'Events'
      }
    }
  },
  parameters: {
    docs: {
      source: {
        code: `<StyledPagination
        current={current}
        setCurrentPage={(current) => setCurrentPage(current)}
      />`
      }
    }
  }
};
