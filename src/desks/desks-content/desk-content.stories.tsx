import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { DesksContent as DesksContentC, IDesksProps } from './desks-content';
import {
  filterLocation,
  filterData,
  neighbourhood,
  deskList,
  selectSearchFilter
} from '../mocks';

import { DEFAULT_SORTING, DEFAULT_PAGING } from '../../constants/mocks';

export const DesksContent = (args: IDesksProps) => (
  <div style={{ height: '90vh' }}>
    <DesksContentC
      isLoading={args.isLoading}
      isReset={args.isReset}
      setIsReset={args.setIsReset}
      onChangeNeighbourhood={args.onChangeNeighbourhood}
      selectSearchFilter={args.selectSearchFilter}
      fetchDesks={args.fetchDesks}
      isImplementation={args.isImplementation}
      onEditDeskStatus={args.onEditDeskStatus}
      filterLocation={args.filterLocation}
      searchName={args.searchName}
      setSelectSearchParameter={args.setSelectSearchParameter}
      resetSearchParameters={args.resetSearchParameters}
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

export default {
  title: 'Desks/DesksContent',
  component: DesksContent,
  args: {
    isLoading: false,
    isReset: false,
    onChangeNeighbourhood: () => {},
    selectSearchFilter,
    fetchDesks: () => {},
    isImplementation: true,
    onEditDeskStatus: () => {},
    filterLocation,
    searchName: '',
    setSelectSearchParameter: () => {},
    updateFilterLocation: () => {},
    filterData,
    neighbourhood,
    onChangeDeskName: () => {},
    onAddDeskStatus: () => {},
    setIsReset:() => {},
    resetSearchParameters:() => {},
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
        isReset={isReset}
        setIsReset={setIsReset}
        onChangeNeighbourhood={onChangeNeighbourhood}
        selectSearchFilter={selectSearchFilter}
        fetchDesks={fetchDesks}
        isImplementation={isImplementation}
        onEditDeskStatus={onEditDeskStatus}
        filterLocation={filterLocation}
        searchName={searchName}
        setSelectSearchParameter={setSelectSearchParameter}
        resetSearchParameters={resetSearchParameters}
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