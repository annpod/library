import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FetchTable } from './fetch-table';

export default {
   title: 'Example/FetchTable',
   component: FetchTable
} as Meta;

const desksColumns: any = [
   {
      title: 'Request',
      dataIndex: 'request'
   },
   {
      title: 'Building',
      dataIndex: 'building'
   }
];

const data: any = [
   {
      building: '250, The Village',
      request: 'First Floor'
   },
   {
      building: '250, The Village',
      request: 'Second Floor'
   },
   {
      building: '250, The Village',
      request: 'Third Floor'
   }
];

export interface IPaginatableParams {
   pageNumber: number;
   pageSize: number;
}

const Template: Story<any> = (args: any) => <FetchTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   columns: desksColumns,
   data,
   totalRowCount: 5,
   paginationParams: {
      pageNumber: 1,
      pageSize: 20
   },
   sortParams: {
      sortingQuery: ''
   },
   isLoading: false
};
