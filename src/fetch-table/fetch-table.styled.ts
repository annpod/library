import React from 'react';
import styled from 'styled-components';

import Table from 'antd/lib/table';
import 'antd/lib/pagination/style/css';
import 'antd/lib/table/style/css';

export const StyledTable = (styled(Table)`
  & .ant-pagination-prev:focus .ant-pagination-item-link,
  .ant-pagination-next:focus .ant-pagination-item-link,
  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    border-color: ${(props) => props.theme.highlightColor};
    color: ${(props) => props.theme.highlightColor};
  }
  &.ant-pagination-jump-prev
    .ant-pagination-item-container
    .ant-pagination-item-link-icon,
  .ant-pagination-jump-next
    .ant-pagination-item-container
    .ant-pagination-item-link-icon,
  .ant-pagination-jump-prev
    .ant-pagination-item-container
    .ant-pagination-item-link-icon,
  .ant-pagination-jump-next
    .ant-pagination-item-container
    .ant-pagination-item-link-icon {
    color: ${(props) => props.theme.highlightColor};
  }

  & .ant-table-thead > tr > th,
  & .ant-table-tbody > tr > td {
    font-size: 12px;
    font-weight: 400;
    background: none;
    border: none;
  }

  & .ant-table-thead > tr > th {
    padding-top: 5px;
    padding-bottom: 8px;
  }

  & .ant-table-tbody > tr > td {
    padding-top: 0;
    padding-bottom: 0;
    border-bottom: 5px solid white;
  }

  & .ant-table-thead > tr > th:hover {
    background: none;
  }
  & .ant-pagination ant-table-pagination > *,
  li:hover,
  a:hover,
  svg:hover {
    border-color: ${(props) => props.theme.highlightColor};
    & a {
      color: ${(props) => props.theme.highlightColor};
    }
  }
  & .ant-pagination.ant-table-pagination .ant-pagination-disabled {
    li:hover,
    a:hover,
    svg:hover {
      border-color: #d9d9d9;
      color: #d9d9d9;
      & a {
        color: #d9d9d9;
      }
    }
  }
  & .ant-pagination-item-active {
    border-color: ${(props) => props.theme.highlightColor};
    & a {
      color: ${(props) => props.theme.highlightColor};
    }
  }

  & .ant-table-column-sorter {
    transform: translateY(-2px);
  }

  & .ant-table-tbody > tr > td {
    background-color: #f7f7f7;
    height: 41px;
    border-bottom: 2px solid #fff;
  }

  & .ant-table-tbody > tr {
    height: 41px;
  }

  &
    .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-up.on,
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-down.on {
    color: ${(props) => props.theme.sortButtonColor};
  }
` as React.ComponentType) as new <T>() => Table<T>;
