import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FetchTable } from './fetch-table';
import { DefaultSortOrder } from '../typings/fetch-table';

const desksColumns: any = [
  {
    title: 'Request',
    dataIndex: 'request',
    defaultSortOrder: DefaultSortOrder.ascend,
    sorter: (a: string, b: string) => (a !== b ? (a < b ? -1 : 1) : 0)
  },
  {
    title: 'Building',
    dataIndex: 'building'
  }
];

const data: any = [
  {
    building: '250, The Village',
    request: 'First Floor',
    key: '1'
  },
  {
    building: '250, The Village',
    request: 'Second Floor',
    key: '2'
  },
  {
    building: '251, The Village',
    request: 'First Floor',
    key: '3'
  },
  {
    building: '251, The Village',
    request: 'First Floor',
    key: '4'
  },
  {
    building: '251, The Village',
    request: 'First Floor',
    key: '5'
  },
  {
    building: '251, The Village',
    request: 'First Floor',
    key: '6'
  },
  {
    building: '251, The Village',
    request: 'First Floor',
    key: '7'
  }
];

export default {
  title: 'V1/FetchTable',
  component: FetchTable,
  args: {
    columns: desksColumns,
    data,
    totalRowCount: 3,
    paginationParams: {
      pageNumber: 1,
      pageSize: 3
    },
    sortParams: {
      sortingQuery: 'asc'
    },
    isLoading: false
  },
  parameters: {
    docs: {
      description: {
        component: 'Based on https://ant.design/components/table/',
      },
      source: {
        code: `<FetchTable
       rowKey={props.rowKey} // specify the primary key of data value via rowKey
       onRow={onRow}
       columns={desksColumns}
       data={data}
       totalRowCount={data.length}
       paginationParams={{
         pageNumber: 1,
         pageSize: 25,
       }}
       sortParams={{
         sortingQuery: '',
       }}
       setFetchParameters={setFetchParameters}
       isLoading={isLoading}
       emptyText={.tableEmptyText}
       isHidePagination={true}
               />`
      }
    }
  }
} as Meta;

const Template: Story<any> = (args: any) => <FetchTable {...args} />;

export const Primary = Template.bind({});
// Primary.args = {
//   columns: desksColumns,
//   data,
//   totalRowCount: 5,
//   paginationParams: {
//     pageNumber: 1,
//     pageSize: 20
//   },
//   sortParams: {
//     sortingQuery: 'asc'
//   },
//   isLoading: false
// };
