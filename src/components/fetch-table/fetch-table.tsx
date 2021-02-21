import React from 'react';

import { PaginationConfig } from 'antd/lib/pagination';
import { ColumnProps, SorterResult, SortOrder } from 'antd/lib/table';

import {
  IPaginatableParams,
  IParsedSortingQuery,
  ISortableParams,
} from '../../typings/api';
import {
  apiToPagination,
  apiToSortData,
  paginationToApi,
  sorterToAPI,
} from '../../utils/api-utils';
import { StyledTable } from './fetch-table.styled';
import { WaveLoading } from 'styled-spinkit';

export interface TableEventListeners {
  onClick?: (arg: React.SyntheticEvent) => void;
  onDoubleClick?: (arg: React.SyntheticEvent) => void;
  onContextMenu?: (arg: React.SyntheticEvent) => void;
  onMouseEnter?: (arg: React.SyntheticEvent) => void;
  onMouseLeave?: (arg: React.SyntheticEvent) => void;
}

export interface IFetchTableProps<T> {
  onRow?: (record: T, index: number) => TableEventListeners;
  columns: ColumnProps<T>[];
  data: T[];
  totalRowCount: number;
  paginationParams: IPaginatableParams;
  sortParams: ISortableParams;
  setFetchParameters: (
    paginationParams: IPaginatableParams,
    sortParams: ISortableParams
  ) => void;
  isLoading: boolean;
  isHidePagination?: boolean;
  emptyText?: string;
}

function defaultSortOrder(
  columnKey: string | number,
  params: IParsedSortingQuery
): SortOrder | undefined {
  return columnKey !== params.key ? undefined : params.order;
}

function applyDefaultSorter<T>(
  columns: ColumnProps<T>[],
  sortParams: ISortableParams
): ColumnProps<T>[] {
  const parsedParams = apiToSortData(sortParams);
  if (!parsedParams) {
    return columns;
  }

  return columns.map((item) => ({
    ...item,
    defaultSortOrder: item.key
      ? defaultSortOrder(item.key, parsedParams)
      : undefined,
  }));
}

export function FetchTable<T>(props: IFetchTableProps<T>) {
  const handleTableChange = (
    pagination: PaginationConfig,
    __: any,
    sorter: SorterResult<T>
  ) => {
    const paginationParams = paginationToApi(
      pagination,
      props.paginationParams.pageSize
    );
    const sortParams = sorterToAPI(sorter);
    props.setFetchParameters(paginationParams, sortParams);
  };

  const columns = applyDefaultSorter(props.columns, props.sortParams);

  const toPagination = apiToPagination(
    props.totalRowCount,
    props.paginationParams
  );

  return props.isLoading ? (
    <WaveLoading color={'#bcbcbc'} />
  ) : (
    <StyledTable
      onRow={props.onRow}
      columns={columns}
      dataSource={props.data}
      onChange={handleTableChange}
      pagination={props.isHidePagination ? false : toPagination}
      locale={props.emptyText ? { emptyText: props.emptyText } : {}}
    />
  );
}
