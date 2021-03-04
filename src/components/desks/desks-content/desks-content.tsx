import React from 'react';
import { size } from 'lodash';
import { ExtendedSelect } from '../../extended-select';
import { strings } from '../../../constants/strings';
import { Icon } from '../../icon';
import { CollapseItem } from '../../collapse-item';
// import { RouteSelector } from '..//route-selector';

import { DesksTable } from '../desks-table';
import { CustomSearchInput } from '../../custom-search-input';
import { ParamsPanel } from '../../params-panel';
import { IPaginatableParams, ISortableParams } from '../../../typings/api';
import { SubmitButton } from '../../button';
import { DEFAULT_PAGING } from '../../../constants/config';
import {
  IDesk,
  DeskFilterGroups,
} from '../desks.typings';
import {
  ContentWrapper,
  SearchSelectBox,
  BackButtonContainer,
  RouteButton,
  SidePanelButton,
  GlobalSeparator,
  ListPageBodyPanel,
  ListPageHeaderBox,
  MainTitleBody,
  MainTitleBoxNoLeft,
  MainTitleName,
  SaveBtn,
  ListPageTableBox,
  ListPageSearchBox,
  ListPageSearchLabel,
  ListPageSearchInputBox
} from '../../../styles/resources.styled';

import { SEARCH_PARAMETER_NAME } from '../../../constants/resources.constants';

// import { IResourcesStateData } from '../../resources.state';
import { filterConfig } from '../desks.constants';
import { LocationFilter } from '../../location-filter';
import { IHashMap } from '../../../typings/etc';
import { IExtendedSelectOption } from '../../extended-select';

export interface IDesksProps {
  isLoading: boolean;
  deskList: IDesk[];
  totalDesksCount: number;
  selectSearchFilter: IHashMap<IHashMap<IExtendedSelectOption>>;
  paginationParams: IPaginatableParams;
  sortParams: ISortableParams;
  status: string;
  isImplementation: boolean;
  filterLocation: any;
  searchName: string;
  filterData: any;
  neighbourhood: any;
  resourcesState: any; // IResourcesStateData;
  onChangeNeighbourhood: (key: string, value: string) => void;
  fetchDesks: (
    paginationParams?: IPaginatableParams,
    sortParams?: ISortableParams
  ) => void;
  onEditDeskStatus: (key: string) => void;
  updateFilterLocation: (filter: any) => void;
  onChangeDeskName: (name: string, value: string) => void;
  setCurrentSection: (state: string | null) => void;
  setSearchParameter: <T>(name: string, value: T) => void;
  setSelectSearchParameter: (
    section: string,
    subSection: string,
    value: string
  ) => void;
  resetSearchParameters: () => void;
  onSetSearchParam: (
    paginationParams: IPaginatableParams,
    sortParams: ISortableParams
  ) => void;
  onAddDeskStatus: () => void;
  routeSelector: any;
}

export const DesksContent = (props: any) => {
  const resetSearchParams = () => {
    resetSearchParameters();
  };

  const getDeskList = () => {
    fetchDesks(DEFAULT_PAGING);
  };

  const {
    isLoading,
    deskList,
    sortParams,
    totalDesksCount,
    paginationParams,
    onChangeNeighbourhood,
    selectSearchFilter,
    fetchDesks,
    isImplementation,
    onEditDeskStatus,
    filterLocation,
    searchName,
    setSelectSearchParameter,
    resetSearchParameters,
    onSetSearchParam,
    updateFilterLocation,
    filterData,
    neighbourhood,
    onChangeDeskName,
    onAddDeskStatus
  } = props;
  return (
    <ContentWrapper>
      {/* {props.routeSelector} */}
      <ParamsPanel title={strings.resources.desks.sideTitle}>
        <BackButtonContainer>
          <RouteButton
            icon={<Icon type='backArrowCircle' />}
            title={strings.resources.backButtonText}
            section=''
            onClick={props.setCurrentSection}
            className='resources-tab-button'
          />
        </BackButtonContainer>
        <SidePanelButton
          icon={<Icon type='reset' />}
          title={strings.resources.resetButtonText}
          onClick={resetSearchParams}
          className='resources-tab-button'
        />
        <GlobalSeparator />
        <CollapseItem title={strings.resources.rooms.siteSearchPanelTitle}>
          <LocationFilter
            setFilterLocation={updateFilterLocation}
            filterData={filterData}
            config={filterConfig}
            filter={filterLocation}
          />
          <SearchSelectBox>
            <ExtendedSelect
              optionValue={DeskFilterGroups.OptionsSection}
              keyValue={neighbourhood.keyValue}
              options={neighbourhood.options}
              value={neighbourhood.value}
              placeholder={neighbourhood.placeholder}
              clearable={true}
              searchable={false}
              onChangeOption={onChangeNeighbourhood}
            />
          </SearchSelectBox>
        </CollapseItem>
        <CollapseItem title={strings.resources.desks.optionsSection}>
          {Object.keys(selectSearchFilter[DeskFilterGroups.OptionsSection]).map(
            (key, index) => {
              const option =
                selectSearchFilter[DeskFilterGroups.OptionsSection][key];
              return (
                <SearchSelectBox key={index}>
                  <ExtendedSelect
                    optionValue={DeskFilterGroups.OptionsSection}
                    keyValue={option.keyValue}
                    options={option.options}
                    value={option.value}
                    placeholder={option.placeholder}
                    clearable={true}
                    searchable={false}
                    onChangeOption={setSelectSearchParameter}
                  />
                </SearchSelectBox>
              );
            }
          )}
        </CollapseItem>
        <SubmitButton
          onClick={getDeskList}
          isLoading={isLoading}
          isDisabled={!size(filterLocation) || !filterLocation.Site.value}
        />
      </ParamsPanel>
      <ListPageBodyPanel>
        <ListPageHeaderBox>
          <MainTitleBody>
            <MainTitleBoxNoLeft>
              <MainTitleName>{strings.resources.desks.title}</MainTitleName>
            </MainTitleBoxNoLeft>
          </MainTitleBody>
          {isImplementation && (
            <SaveBtn onClick={onAddDeskStatus}>
              {strings.resources.desks.addButtonTitle}
            </SaveBtn>
          )}
        </ListPageHeaderBox>
        <ListPageSearchBox>
          <ListPageSearchLabel>
            {strings.resources.desks.nameInputLabel}
          </ListPageSearchLabel>
          <ListPageSearchInputBox>
            <CustomSearchInput
              name={SEARCH_PARAMETER_NAME}
              placeholder={strings.resources.desks.nameInputPlaceholder}
              value={searchName}
              onChange={onChangeDeskName}
              disabled={!size(filterLocation) || !filterLocation.Site.value}
            />
          </ListPageSearchInputBox>
        </ListPageSearchBox>
        <ListPageTableBox>
          <DesksTable
            data={deskList}
            totalRowCount={totalDesksCount}
            paginationParams={paginationParams}
            sortParams={sortParams}
            setDesksFetchParameters={onSetSearchParam}
            onEdit={onEditDeskStatus}
            isLoading={isLoading}
          />
        </ListPageTableBox>
      </ListPageBodyPanel>
    </ContentWrapper>
  );
};
