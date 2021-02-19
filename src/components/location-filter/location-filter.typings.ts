export enum PreferencesItems {
  defaultRegionId = 'defaultRegionId',
  defaultSiteId = 'defaultSiteId',
  defaultBuildingId = 'defaultBuildingId',
  defaultFloorId = 'defaultFloorId',
}
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
  Neighbourhood = 'Neighbourhood',
}

export interface ILocationFilter {
  [key: string]: {
    childKey: LocationFilterItems | null;
    filterKey: string | null;
    parentKey: string | null,
    dataField: string,
    preference?: PreferencesItems,    
  }
}

export interface IUserPreferences {
  [PreferencesItems.defaultRegionId]: string;
  [PreferencesItems.defaultSiteId]: string;
  [PreferencesItems.defaultBuildingId]: string;
  [PreferencesItems.defaultFloorId]: string;
  currentUserKey: string;
}