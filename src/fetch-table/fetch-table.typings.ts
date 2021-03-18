import { ColumnProps } from 'antd/lib/table';
import {
  IPaginatableParams,
  ISortableParams
} from '../typings/api';

export enum DefaultSortOrder {
  ascend = 'ascend',
  descend = 'descend',
}

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