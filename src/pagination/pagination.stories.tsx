import React from 'react';

import { StyledPagination } from './pagination';
import { IPaginationProps } from './pagination.typings';

export const Primary = (args: IPaginationProps) => (
  <StyledPagination
    {...args}
    current={args.current}
    setCurrentPage={() => {}}
  />
);

export default {
  title: 'Pagination',
  component: StyledPagination,
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
      description: {
        component: 'Based on https://ant.design/components/pagination/'
      },
      source: {
        code: `<StyledPagination
        current={current}
        setCurrentPage={(current) => setCurrentPage(current)}
      />`
      }
    }
  }
};
