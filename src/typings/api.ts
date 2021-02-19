import { SortOrder } from 'antd/lib/table';

export interface ISortableParams {
  sortingQuery: string;
}
export interface IParsedSortingQuery {
  key: string;
  order: SortOrder;
}
export interface IPaginatableParams {
  pageNumber: number;
  pageSize: number;
}
