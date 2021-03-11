import { createLocationFilter } from '../location-filter';
import { createNeighbourhoodsFilter } from './utils';
import { filterConfig } from './desks.constants';


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
