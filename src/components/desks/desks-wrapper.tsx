import React from 'react';
import { Route } from 'react-router-dom';

import { DeskDetails,  } from './desk-details';
import {  DesksContent } from './desks-content';


import { useDesks } from './desks-wrapper.state';

import { RESOURCE_SECTIONS } from '../../constants/resources.constants';

// import { IResourcesStateData } from '../resources.state';
import { RESOURCES_ROUTE } from '../../constants/routes';

// export interface IDesksWapperProps {
//   resourcesState: any; //  IResourcesStateData;
//   setCurrentSection: (state: string | null) => void;
//   changeUrl: (url: string) => void;
//   deskKey: string;
// }

export const DesksWrapper = (props: any) => {
  const {
    state,
    searchName,
    setSelectSearchParameter,
    resetSearchParameters,
    onSetSearchParam,
    onAddDeskStatus,
    onRemoveDesk,
    updateFilterLocation,
    filterData,
    filterLocation,
    neighbourhood,
    onChangeNeighbourhood,
    getDesks,
    onChangeDeskName,
    createDesksTable,
    createFilter,
    onEditDeskStatus,
  } = useDesks(props);

  React.useEffect(() => {
    createDesksTable(props.desksData);
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [props.desksData]);
 
   React.useEffect(() => {
     createFilter(props.deskFilterData);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.deskFilterData]);

    
  return (
    <>
      <Route
        path={`${RESOURCES_ROUTE}/${RESOURCE_SECTIONS.desks}/:deskKey`}
        render={({
          match: {
            params: { deskKey },
          },
        }: any) => (
          <DeskDetails
            deskKey={state.currentDeskKey || deskKey}
            onCancel={props.cancelDeskView}
            onSave={props.onSaveDesk}
            onDelete={onRemoveDesk}
            deskDetailsRouteHandler={props.deskDetailsRouteHandler}
            deskData={props.deskDetails}
            usersData={props.usersData}
            isImplementation={props.isImplementation}
            fetchUsers={props.fetchUsers}
            deskFilterData={props.deskFilterData}
          />
        )}
      />
      <Route
        exact
        path={`${RESOURCES_ROUTE}/${RESOURCE_SECTIONS.desks}`}
        render={() => (
          <DesksContent
            isLoading={props.isLoading}
            onChangeNeighbourhood={onChangeNeighbourhood}
            selectSearchFilter={state.selectSearchFilter}
            fetchDesks={getDesks}
            isImplementation={props.isImplementation}
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
            setCurrentSection={props.setCurrentSection}
          />
        )}
      />
    </>
  );
};
