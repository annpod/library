import React from 'react';
import Pagination from 'antd/lib/pagination';

import 'antd/lib/pagination/style/css';
import styled from 'styled-components';
import { IPaginationProps } from './pagination.typings';

export const StyledPagination = (props: IPaginationProps) => {
  const { current, setCurrentPage, defaultPageSize, total } = props;
  return (
    <PaginationWrapper
      current={current}
      onChange={setCurrentPage}
      defaultPageSize={defaultPageSize}
      total={total}
    />
  );
};

const PaginationWrapper = styled(Pagination)`
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  & .ant-pagination {
    li:hover,
    a:hover,
    svg:hover {
      border-color: ${(props) => props.theme.highlightColor};
      & a {
        color: ${(props) => props.theme.highlightColor};
      }
    }
  }

  & .ant-pagination-prev:focus .ant-pagination-item-link,
  .ant-pagination-next:focus .ant-pagination-item-link,
  .ant-pagination-prev:hover .ant-pagination-item-link,
  .ant-pagination-next:hover .ant-pagination-item-link {
    border-color: ${(props) => props.theme.highlightColor};
    color: ${(props) => props.theme.highlightColor};
  }
  &
    .ant-pagination-disabled.ant-pagination-prev:hover
    .ant-pagination-item-link,
  .ant-pagination-disabled.ant-pagination-next:hover .ant-pagination-item-link {
    border-color: #d9d9d9;
    color: #d9d9d9;
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

  & .ant-pagination-item-active {
    border-color: ${(props) => props.theme.highlightColor};
    & a {
      color: ${(props) => props.theme.highlightColor};
    }
  }
`;
