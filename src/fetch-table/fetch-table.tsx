import React from 'react';

import { PaginationConfig } from 'antd/lib/pagination';

import { ColumnProps, SorterResult, SortOrder } from 'antd/lib/table';

import { IParsedSortingQuery, ISortableParams } from '../typings/api';
import {
  apiToPagination,
  apiToSortData,
  paginationToApi,
  sorterToAPI
} from '../utils/api-utils';
import { StyledTable } from './fetch-table.styled';
import { WaveLoading } from 'styled-spinkit';
import { IFetchTableProps } from '../typings/fetch-table';

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
      : undefined
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

  const rowSelection = {
    onChange: (selectedRowKeys: string[] | number[]) => {
      if (props.rowSelection) {
        props.rowSelection(selectedRowKeys);
      }
    },
    selectedRowKeys: props.selectedRowKeys
  };

  if (props.isLoading) return <WaveLoading color='#bcbcbc' />;

  if (props.rowSelection) {
    return (
      <StyledTable
        rowKey={props.rowKey || 'key'}
        rowSelection={rowSelection}
        onRow={props.onRow}
        columns={columns}
        dataSource={props.data}
        onChange={handleTableChange}
        pagination={props.isHidePagination ? false : toPagination}
        locale={props.emptyText ? { emptyText: props.emptyText } : {}}
      />
    );
  }

  return (
    <StyledTable
      rowKey={props.rowKey || 'key'}
      onRow={props.onRow}
      columns={columns}
      dataSource={props.data}
      onChange={handleTableChange}
      pagination={props.isHidePagination ? false : toPagination}
      locale={props.emptyText ? { emptyText: props.emptyText } : {}}
    />
  );
}
