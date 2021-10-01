import React from 'react';

import { StyledTable } from './fetch-table.styled';
import { WaveLoading } from 'styled-spinkit';
import { ITableProps } from '../typings/fetch-table';

export function Table<T>(props: ITableProps<T>) {

  if (props.isLoading) return <WaveLoading color='#bcbcbc' />;

  return (
    <StyledTable
      rowKey={props.rowKey || 'key'}
      onRow={props.onRow}
      columns={props.columns}
      dataSource={props.data}
      pagination={props.isHidePagination ? false : props.pagination}
      locale={props.emptyText ? { emptyText: props.emptyText } : {}}
    />
  );
}
