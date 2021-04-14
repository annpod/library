import { strings } from '../constants/strings';

import { formatSelectOptions } from '../utils/select.utils';
import {
  IUserPreferences,
  IFilterConfig,
  LocationFilterItems,
  ISelectOption
} from '../typings';
import { LOCATION_FILTER } from './location-filter.constant';

interface IFilterGroupItem {
  key: LocationFilterItems;
  value: string;
  options: any[];
  isDisabled: boolean;
  filterKey?: string;
}

export const placeholderMap: any = {
  [LocationFilterItems.Region]: strings.resources.desks.regions,
  [LocationFilterItems.Site]: strings.resources.rooms.siteSelectPlaceholder,
  [LocationFilterItems.Building]:
    strings.resources.rooms.buildingSelectPlaceholder,
  [LocationFilterItems.Floor]: strings.resources.rooms.floorSelectPlaceholder,
  [LocationFilterItems.Room]: strings.resources.rooms.roomSelectPlaceholder,
  [LocationFilterItems.Neighbourhood]:
    strings.resources.desks.neighbourhoodSelectPlaceholder
};

const parseFilterGroup = (group: IFilterGroupItem[]) => {
  return group.reduce((acc, x) => {
    return {
      ...acc,
      [x.key]: {
        keyValue: x.key,
        placeholder: placeholderMap[x.key],
        value: x.value || '',
        options: formatSelectOptions(x.options, 'key'),
        isDisabled: x.isDisabled || false
      }
    };
  }, {});
};

export const getOptions = (
  filterData: any,
  parent: any,
  filterKey: string | null
) => {
  if (!parent || !parent.value || !filterKey) {
    return [];
  }
  let data = Array.isArray(parent.value)
    ? filterData.filter((e: any) => parent.value.includes(e[filterKey]))
    : filterData.filter((e: any) => parent.value === e[filterKey]);
  return data ? formatSelectOptions(data, 'key') : [];
};

const getFilterOptions = (
  list: any,
  parentValue: string | string[] | null,
  filterKey: string | null
) => {
  if (!filterKey) {
    return list ? list : [];
  }
  return parentValue && filterKey
    ? list.filter((item: any) => {
        if (Array.isArray(parentValue)) {
          return parentValue.includes(item[filterKey]);
        }
        return item[filterKey] === parentValue;
      })
    : [];
};

export const createLocationFilter = (
  filterData: any,
  filterConfig: IFilterConfig,
  preferences?: IUserPreferences | null
) => {
  let parentValue: string | string[] | null = null;
  const newFilter = Object.keys(filterConfig).map((key: any) => {
    const preferenceKey = LOCATION_FILTER[key].preference;

    const dataField: string = LOCATION_FILTER[key].dataField;

    const options =
      key === LocationFilterItems.Region
        ? filterData.regions
        : getFilterOptions(
            filterData[dataField],
            parentValue,
            LOCATION_FILTER[key].filterKey
          );
    const value =
      options.length === 1
        ? options[0].key
        : preferences && preferenceKey && preferences[preferenceKey]
        ? preferences[preferenceKey]
        : '';

    parentValue = value;
    return {
      key,
      value: !filterConfig[key].isMulti ? value : value ? [value] : [],
      options,
      isDisabled: !options.length
    };
  });

  return parseFilterGroup(newFilter);
};

export const getMultiValue = (options: ISelectOption[], values?: string[]) => {
  if (options && options.length === 1) {
    return [options[0].value];
  }
  if (!values || !values.length || !options) {
    return [];
  }
  const optionValues = options.map((item: any) => item.value);
  return values.filter((item: string) => optionValues.includes(item));
};

export const getSingleValue = (options: ISelectOption[]) => {
  if (!options.length) {
    return '';
  }
  return options.length === 1 ? options[0].value : '';
};
