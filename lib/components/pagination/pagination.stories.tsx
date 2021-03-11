import React from 'react';
import { Store, State } from '@sambego/storybook-state';
import { StyledPagination } from './pagination';
import { IPaginationProps } from './pagination.typings';

const store = new Store({
  current: 1
});

export const Pagination = (args: IPaginationProps) => (
  <State store={store}>
    {(state) => (
      <StyledPagination
        {...args}
        current={state.current}
        setCurrentPage={(current) => store.set({ current: current })}
      />
    )}
  </State>
);

export default {
  title: 'Shared/Pagination',
  component: Pagination,
  args: {
    defaultPageSize: 10,
    total: 100,
    current: 1,
    setCurrentPage: (current: number) => store.set({ current: current })
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
