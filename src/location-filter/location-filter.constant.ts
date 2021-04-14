import { PreferencesItems } from '../typings';
import { ILocationFilterConfig, LocationFilterItems } from '../typings/location-filter';

export const LOCATION_FILTER: ILocationFilterConfig = {
  Region: {
    childKey: LocationFilterItems.Site,
    filterKey: null,
    parentKey: null,
    dataField: 'regions',
    preference: PreferencesItems.defaultRegionId,    
  },
  Site: {
    childKey: LocationFilterItems.Building,
    filterKey: 'regionKey',
    parentKey: LocationFilterItems.Region,
    dataField: 'sites',
    preference: PreferencesItems.defaultSiteId,
  },
  Building: {
    childKey: LocationFilterItems.Floor,
    filterKey: 'siteKey',
    parentKey: LocationFilterItems.Site,
    dataField: 'buildings',
    preference: PreferencesItems.defaultBuildingId,
  },
  Floor: {
    childKey: LocationFilterItems.Room,
    filterKey: 'buildingKey',
    parentKey: LocationFilterItems.Building,
    dataField: 'floors',
    preference: PreferencesItems.defaultFloorId,
  },
  Room: {
    childKey: null,
    filterKey: 'floorKey',
    parentKey: LocationFilterItems.Floor,
    dataField: 'rooms',
  },
  Neighbourhood : {
    childKey: null,
    filterKey: 'floorKey',
    parentKey: LocationFilterItems.Floor,
    dataField: 'neighbourhoods',
  }
};
