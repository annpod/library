import {
  IDesk,
  DeskFilterGroups,
  DeskFilterItems,
  ISaveDeskData,
  DesksStateStatuses,
} from './desks.typings';
import { IPaginatableParams, ISortableParams } from '../../typings/api';
import { DEFAULT_PAGING, DEFAULT_SORTING } from '../../constants/config';
import { useEffect, useState } from 'react';
import { IHashMap } from '../../typings/etc';
import {
  createFeatureFilter,
  FilterBuilder,
  formatData,
  createNeighbourhoodsFilter,
} from './utils';
import { IExtendedSelectOption } from '../extended-select';
import { RESOURCE_SECTIONS } from '../../constants/resources.constants';
import { RESOURCES_ROUTE } from '../../constants/routes';
import { createLocationFilter } from '../location-filter';
import { filterConfig } from './desks.constants';
import { useDebounce } from '../../hooks/use-debounce';

export interface IDeskStateData {
  deskList: IDesk[];
  totalDesksCount: number;
  selectSearchFilter: IHashMap<IHashMap<IExtendedSelectOption>>;
  paginationParams: IPaginatableParams;
  sortParams: ISortableParams;
  status: string;
  currentDeskKey: string;
  currentDeskProvisioningKey: string;
}

const initialState: IDeskStateData = {
  deskList: [],
  totalDesksCount: 0,
  selectSearchFilter: createFeatureFilter({
    features: [],
    statuses: [],
  }),
  paginationParams: DEFAULT_PAGING,
  sortParams: DEFAULT_SORTING,
  status: DesksStateStatuses.notSelected,
  currentDeskKey: '',
  currentDeskProvisioningKey: '',
};

const DEFAULT_FILTER_DATA = {
  regions: [],
  sites: [],
  buildings: [],
  floors: [],
  neighbourhood: [],
  features: [],
  statuses: [],
};

const DEFAULT_LOCATION_FILTER = createLocationFilter(
  {
    regions: [],
    sites: [],
    buildings: [],
    floors: [],
    neighbourhood: [],
  },
  filterConfig
);

const DEFAULT_NEIGHBOURHODS = createNeighbourhoodsFilter([]);

export interface IDesksState {
  state: IDeskStateData;
  isLoading: boolean;
  neighbourhood: IExtendedSelectOption;
  filterData: any;
  filterLocation: any;
  searchName: string;
  onChangeNeighbourhood: (key: string, value: string) => void;
  fetchDesks: (
    paginationParams?: IPaginatableParams,
    sortParams?: ISortableParams
  ) => void;
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
  onEditDeskStatus: (key: string) => void;

  onSaveDesk: (data: ISaveDeskData, cb: () => void) => void;
  cancelDeskView: () => void;
  onRemoveDesk: (provisioningKey: string) => void;
  updateFilterLocation: (filter: any) => void;
  onChangeDeskName: (name: string, value: string) => void;
  getDeskDetails: () => void;
  onFetchUsers: (search: string) => void;
}

export const useDesks = (
  props: any
): any => {
  const [state, setState] = useState(initialState);
  const [filterLocation, setFilterLocation] = useState<any>(
    DEFAULT_LOCATION_FILTER
  );
  const [filterData, setFilterData] = useState(DEFAULT_FILTER_DATA);
  const [neighbourhood, setNeighbourhood] = useState(DEFAULT_NEIGHBOURHODS);
  const [isReset, setIsReset] = useState(true);
  const [searchName, setSearchName] = useState('');
  const debouncedSearchTerm = useDebounce(searchName, 600);

  useEffect(() => {
    if (isReset) {
      setIsReset(false);
      return;
    }
    if (debouncedSearchTerm.length > 0 && debouncedSearchTerm.length < 3) {
      return;
    }
    getDesks(DEFAULT_PAGING);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const createFilter = (data: any) => {
    if (!data || !data.regions) return;
    const dataFilter = formatData(data);
    const selectSearchFilter = createFeatureFilter({
      features: dataFilter.features,
      statuses: dataFilter.statuses,
    });
    setNeighbourhood(createNeighbourhoodsFilter(dataFilter.neighbourhoods));
    setFilterData({
      regions: dataFilter.regions,
      sites: dataFilter.sites,
      buildings: dataFilter.buildings,
      floors: dataFilter.floors,
      neighbourhood: dataFilter.neighbourhood,
      features: dataFilter.features,
      statuses: dataFilter.statuses,
    });
    setState((s: IDeskStateData) => ({
      ...s,
      selectSearchFilter,
      flag: true,
    }));
    setFilterLocation(
      createLocationFilter(dataFilter, filterConfig, props.preferences)
    );
  };

  const createDesksTable = (data: any) => {
    if (!data || !data.desks) return;

    setState((s: IDeskStateData) => ({
      ...s,
      deskList: data.desks,
      totalDesksCount: data.totalDesksCount,
      // paginationParams: paginationParams || state.paginationParams,
      // sortParams: sortParams || state.sortParams,
    }));
  };

  const onChangeDeskName = (name: string, value: string) => {
    setSearchName(value);
  };

  const getDesks = async (
    paginationParams?: IPaginatableParams,
    sortParams?: ISortableParams
  ) => {
    
    if (!(filterLocation.Site && filterLocation.Site.value)) {
      return;
    }
    const payload = FilterBuilder.build(
      filterData,
      filterLocation,
      state.selectSearchFilter,
      searchName,
      paginationParams ? paginationParams : state.paginationParams,
      sortParams ? sortParams : state.sortParams,
      neighbourhood
    );
    props.fetchDesks(payload);
    setState((s: IDeskStateData) => ({
      ...s,
      paginationParams: paginationParams || state.paginationParams,
      sortParams: sortParams || state.sortParams,
    }));
  };

  const setSearchParameter = <T>(name: string, value: T) => {
    setState((s: IDeskStateData) => ({
      ...s,
      paginationParams: DEFAULT_PAGING,
    }));
  };

  const updateFilterLocation = (filter: any) => {
    setFilterLocation(filter);
  };

  const onChangeNeighbourhood = (key: string, value: string) => {
    setNeighbourhood({ ...neighbourhood, value });
  };

  const setSelectSearchParameter = (
    subSection: string,
    value: string,
    section: string
  ) => {
    const filter = state.selectSearchFilter[section][subSection];
    filter.value = value;
    setState((s) => ({
      ...s,
      selectSearchFilter: {
        ...s.selectSearchFilter,
        [section]: {
          ...s.selectSearchFilter[section],
          [subSection]: filter,
        },
      },
    }));
  };

  const resetSearchParameters = () => {
    setState((s: IDeskStateData) => ({
      ...s,
      flag: false,
      paginationParams: DEFAULT_PAGING,
      sortParams: DEFAULT_SORTING,
      selectSearchFilter: {
        ...s.selectSearchFilter,
        [DeskFilterGroups.OptionsSection]: {
          ...s.selectSearchFilter[DeskFilterGroups.OptionsSection],

          [DeskFilterItems.Status]: {
            ...s.selectSearchFilter[DeskFilterGroups.OptionsSection][
              DeskFilterItems.Status
            ],
            value: '',
          },
          [DeskFilterItems.Feature]: {
            ...s.selectSearchFilter[DeskFilterGroups.OptionsSection][
              DeskFilterItems.Feature
            ],
            value: '',
          },
        },
      },

      deskList: [],
      totalDesksCount: 0,
    }));
    setIsReset(true);
    setSearchName('');
    setNeighbourhood({ ...neighbourhood, value: '' });

    setFilterLocation(
      createLocationFilter(filterData, filterConfig, props.preferences)
    );
  };

  const onSetSearchParam = (
    paginationParams: IPaginatableParams,
    sortParams: ISortableParams
  ) => {
    getDesks(paginationParams, sortParams);
  };

  const onAddDeskStatus = () => {
    setState((s: IDeskStateData) => ({
      ...s,
      status: DesksStateStatuses.add,
      currentDeskKey: '',
    }));
    props.changeUrl(`${RESOURCES_ROUTE}/${RESOURCE_SECTIONS.desks}/add`);
  };

  const onEditDeskStatus = (key: string) => {
    setState((s: IDeskStateData) => ({
      ...s,
      status: DesksStateStatuses.edit,
      currentDeskKey: key,
    }));
    if (key) props.changeUrl(`${RESOURCES_ROUTE}/${RESOURCE_SECTIONS.desks}/${key}`);
  };


  return {
    state,
    neighbourhood,
    filterData,
    filterLocation,
    onChangeNeighbourhood,
    setSearchParameter,
    setSelectSearchParameter,
    resetSearchParameters,
    onSetSearchParam,
    onEditDeskStatus,
    updateFilterLocation,
    onChangeDeskName,
    createDesksTable,
    createFilter,
    getDesks,
    onAddDeskStatus
  };
};
