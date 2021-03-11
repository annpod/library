import React from 'react';

import { FetchTable } from '../../fetch-table';

import { strings } from '../../../constants/strings';
import { ISortableParams, IPaginatableParams } from '../../../typings/api';
import { IDesk } from '../desks.typings';

export interface IDesksTableProps {
  data: IDesk[];
  totalRowCount: number;
  paginationParams: IPaginatableParams;
  sortParams: ISortableParams;
  setDesksFetchParameters: (
    paginationParams: IPaginatableParams,
    sortParams: ISortableParams
  ) => void;
  onEdit: (id: string) => void;
  isLoading: boolean;
}

export const DesksTable = (props: IDesksTableProps) => {
  const desksColumns = [
    {
      title: strings.resources.desks.nameColumnHeader,
      dataIndex: 'name',
      key: 'name',
      sorter: true,
    },
    {
      title: strings.resources.rooms.statusColumnHeader,
      dataIndex: 'deskStatus.name',
      key: 'deskStatusName',
      sorter: true,
    },
  ];

  const onRow = (record: IDesk) => {
    return {
      onClick: () => {
        props.onEdit(record.provisioningKey);
      },
    };
  };

  return (
    <FetchTable
      onRow={onRow}
      columns={desksColumns}
      data={props.data}
      totalRowCount={props.totalRowCount}
      paginationParams={props.paginationParams}
      sortParams={props.sortParams}
      setFetchParameters={props.setDesksFetchParameters}
      isLoading={props.isLoading}
    />
  );
};
