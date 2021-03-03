import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
// import { Store, State } from '@sambego/storybook-state';

import { DesksContent, IDesksProps } from './desks-content';
import {
  filterLocation,
  filterData,
  neighbourhood,
  deskList,
  selectSearchFilter
} from '../mocks';
// import { ISaveDeskData } from './desks.typings';
import { DEFAULT_SORTING, DEFAULT_PAGING } from '../../../constants/mocks';

export default {
  title: 'Desks/DesksContent',
  component: DesksContent,
  args: {
    isLoading: false,
    onChangeNeighbourhood: () => {},
    selectSearchFilter,
    fetchDesks: () => {},
    isImplementation: true,
    onEditDeskStatus: () => {},
    filterLocation,
    searchName: '',
    setSelectSearchParameter: () => {},
    resetSearchParameters: () => {},
    onSetSearchParam: () => {},
    updateFilterLocation: () => {},
    filterData,
    neighbourhood,
    onChangeDeskName: () => {},
    onAddDeskStatus: () => {},
    deskList,
    totalDesksCount: deskList.length,
    sortParams: DEFAULT_SORTING,
    paginationParams: DEFAULT_PAGING,
    routeSelector: `<div />`
  },
  parameters: {
    docs: {
      source: {
        code: `<DesksContent
        isLoading={isLoading}
        onChangeNeighbourhood={onChangeNeighbourhood}
        selectSearchFilter={selectSearchFilter}
        fetchDesks={fetchDesks}
        isImplementation={isImplementation}
        onEditDeskStatus={onEditDeskStatus}
        filterLocation={filterLocation}
        searchName={searchName}
        setSelectSearchParameter={setSelectSearchParameter}
        resetSearchParameters={resetSearchParameters}
        onSetSearchParam={onSetSearchParam}
        updateFilterLocation={updateFilterLocation}
        filterData={filterData}
        neighbourhood={neighbourhood}
        onChangeDeskName={onChangeDeskName}
        onAddDeskStatus={onAddDeskStatus}
        deskList={state.deskList}
        totalDesksCount={state.totalDesksCount}
        sortParams={state.sortParams}
        paginationParams={state.paginationParams}
        routeSelector={<RouteSelector selector={'Resources'} />}
      />`
      }
    }
  }
} as Meta;

export const DeskDetailsPage = (args: IDesksProps) => (
  <div style={{ height: '90vh' }}>
    <DesksContent
      isLoading={args.isLoading}
      onChangeNeighbourhood={args.onChangeNeighbourhood}
      selectSearchFilter={args.selectSearchFilter}
      fetchDesks={args.fetchDesks}
      isImplementation={args.isImplementation}
      onEditDeskStatus={args.onEditDeskStatus}
      filterLocation={args.filterLocation}
      searchName={args.searchName}
      setSelectSearchParameter={args.setSelectSearchParameter}
      resetSearchParameters={args.resetSearchParameters}
      onSetSearchParam={args.onSetSearchParam}
      updateFilterLocation={args.updateFilterLocation}
      filterData={args.filterData}
      neighbourhood={args.neighbourhood}
      onChangeDeskName={args.onChangeDeskName}
      onAddDeskStatus={args.onAddDeskStatus}
      deskList={args.deskList}
      totalDesksCount={args.totalDesksCount}
      sortParams={args.sortParams}
      paginationParams={args.paginationParams}
    />
  </div>
);
