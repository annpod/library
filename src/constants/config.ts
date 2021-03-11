import { Env } from './env';

import { IHashMap } from '../typings/etc';

const DEV_ADMIN_PROFILE = 'DEV_ADMIN_PROFILE';
const CONNECT_IB_PROFILE = 'CONNECT_IB_PROFILE';
const PRODUCTION_PROFILE = 'production';

const CURRENT_ENV = Env.isProduction
  ? PRODUCTION_PROFILE
  : Env.urlProfile || CONNECT_IB_PROFILE;

interface IUrlConfig {
  managerUrl: string;
  identityUrl: string;
  rootRoute: string;
  iconsUrl: string;
}

const URL_CONFIG: IHashMap<IUrlConfig> = {
  [DEV_ADMIN_PROFILE]: {
    managerUrl: 'https://devadminmanager',
    identityUrl: 'https://devdeskbookingidentity',
    rootRoute: '/administration',
    iconsUrl: 'https://cdn-a.platformcluster.connectib.com/mappingprovider',
  },
  [CONNECT_IB_PROFILE]: {
    managerUrl:
      'https://service.platformcluster.connectib.com/administrationmanager',
    identityUrl: 'https://service.platformcluster.connectib.com/identity',
    rootRoute: '/administration',
    iconsUrl: 'https://cdn-a.platformcluster.connectib.com/mappingprovider',
  },
  [PRODUCTION_PROFILE]: {
    managerUrl: '#||managerBaseURL||',
    identityUrl: '#||IdentityURL||',
    rootRoute: `${process.env.PUBLIC_URL}`,
    iconsUrl: 'https://cdn-a.platformcluster.connectib.com/mappingprovider',
  },
};

export const APP_CONFIG: Record<string, string> = {
  ...URL_CONFIG[CURRENT_ENV],
  theme: '#||theme||',
};

export const DEFAULT_PAGING = {
  pageNumber: 1,
  pageSize: 10,
};

export const DEFAULT_SORTING = {
  sortingQuery: '',
};


export const MAX_INT32_VALUE = 2147483647; // Maximum value possible for 32-bit signed integer
