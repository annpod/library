import { PaginationConfig } from 'antd/lib/pagination';
import { SorterResult } from 'antd/lib/table';

import {
  ISortableParams,
  IPaginatableParams,
  IParsedSortingQuery,
} from 'typings/api';

export const paginationToApi = (
  pagination: PaginationConfig,
  defaultSize: number
): IPaginatableParams => {
  return {
    pageNumber: pagination.current ? pagination.current : 1,
    pageSize: pagination.pageSize ? pagination.pageSize : defaultSize,
  };
};

export const apiToPagination = (
  totalRowCount: number,
  paginationParams: IPaginatableParams
): PaginationConfig => {
  return {
    total: totalRowCount,
    current: paginationParams.pageNumber,
    pageSize: paginationParams.pageSize,
  };
};

export function sorterToAPI<T>(sorter: SorterResult<T>): ISortableParams {
  if (!sorter.column) {
    return {
      sortingQuery: '',
    };
  }

  const order = sorter.order === 'ascend' ? 'Asc' : 'Desc';

  return {
    sortingQuery: `${sorter.column.key} ${order}`,
  };
}

export const apiToSortData = (
  params: ISortableParams
): IParsedSortingQuery | null => {
  const splitParams = params.sortingQuery.split(' ');

  if (splitParams.length < 2) {
    return null;
  }

  return {
    key: splitParams[0],
    order: splitParams[1] === 'Asc' ? 'ascend' : 'descend',
  };
};
