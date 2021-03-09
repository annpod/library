import { IFilterConfig, createLocationFilter } from '../location-filter';
import { createNeighbourhoodsFilter } from './utils';

export const filterConfig: IFilterConfig = {
  Region: {
    isMulti: false
  },
  Site: {
    isMulti: false
  },
  Building: {
    isMulti: false
  },
  Floor: {
    isMulti: false
  }
};

export const locationKeyMap: any = {
  regions: null,
  sites: 'regionKey',
  buildings: 'siteKey',
  floors: 'buildingKey'
};

export const DEFAULT_FILTER_DATA = {
  regions: [],
  sites: [],
  buildings: [],
  floors: [],
  neighbourhood: [],
  features: [],
  statuses: []
};

export const DEFAULT_LOCATION_FILTER = createLocationFilter(
  {
    regions: [],
    sites: [],
    buildings: [],
    floors: [],
    neighbourhood: []
  },
  filterConfig
);

export const DEFAULT_NEIGHBOURHODS = createNeighbourhoodsFilter([]);
