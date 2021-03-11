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


