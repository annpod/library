import { ISelectOption, PreferencesItems } from '.';

export interface IFilterConfig {
  [key: string]: IProps;
}

interface IProps {
  isMulti: boolean;
}

export enum LocationFilterItems {
  Region = 'Region',
  Site = 'Site',
  Building = 'Building',
  Floor = 'Floor',
  Room = 'Room',
  Neighbourhood = 'Neighbourhood'
}

export interface ILocationFilterConfig {
  [key: string]: {
    childKey: LocationFilterItems | null;
    filterKey: string | null;
    parentKey: string | null;
    dataField: string;
    preference?: PreferencesItems;
  };
}

export interface ILocationFilterProps {
  filterData: IFilterData;
  config: IFilterConfig;
  filter: IFilterState;
  setFilterLocation: (value: any) => void;
}



interface IRegionsData {
  key: string;
  name: string;
}
interface ISitesData {
  key: string;
  regionKey: string;
  name: string;
}
interface IBuildingsData {
  key: string;
  name: string;
  siteKey: string;
}
interface IFloorsData {
  key: string;
  name: string;
  buildingKey: string;
}
interface IRoomData {
  key: string;
  name: string;
  buildingKey: string;
}

export interface IFilterData {
  regions: IRegionsData[];
  sites: ISitesData[];
  buildings: IBuildingsData[];
  floors: IFloorsData[];
  room?: IRoomData[];
}

export interface IFilterState {
  [key: string]: {
    isDisabled: boolean;
    keyValue: string;
    options: ISelectOption[];
    placeholder: string;
    value: string | string[];
  };
}
