import {
  placeholderMap,
  getOptions,
  getMultiValue,
  getSingleValue,
} from './location-filter.utils';
import { LOCATION_FILTER } from './location-filter.constant';
import { IFilterConfig } from '../typings/location-filter';

export const useFilter = (
  setFilterLocation: (value: any) => void,
  filterData: any,
  filter: any,
  config: IFilterConfig
) => {
  const onClearFilter = (key: string) => {
    const filterKeys = Object.keys(config);
    const index = filterKeys.findIndex((item) => item === key);
    const clearArr = filterKeys.slice(index);

    setFilterLocation({
      ...filter,
      ...clearArr.reduce(
        (acc, k, i) => ({
          ...acc,
          [k]: {
            keyValue: k,
            placeholder: placeholderMap[k],
            options: i === 0 ? filter[k].options : [],
            value: '',
            isDisabled: false,
          },
        }),
        {}
      ),
    });
  };

  const onUpdateChildren = (key: string, value: string | string[]) => {
    let parent: any;
    const filterKeys = Object.keys(config);
    const index = filterKeys.findIndex((item) => item === key);
    const updateArr = filterKeys.slice(index);

    setFilterLocation({
      ...filter,
      ...updateArr.reduce((acc, k, i) => {
        let properties = filter[k];
        if (i === 0) {
          const isValue = Array.isArray(value) ? !!value.length : !!value;
          properties.value = isValue
            ? value
            : config[key].isMulti
            ? getMultiValue(filter[key].options)
            : getSingleValue(filter[key].options);
        } else {
          const filterKey = LOCATION_FILTER[k].filterKey;
          const dataField = LOCATION_FILTER[k].dataField;
          const selectOptions = getOptions(
            filterData[dataField],
            parent,
            filterKey
          );
          let newValue: string | string[] = config[k].isMulti
            ? getMultiValue(selectOptions, filter[k].value)
            : getSingleValue(selectOptions);
          properties = {
            ...properties,
            options: selectOptions,
            value: newValue,
            isDisabled: !selectOptions.length,
          };
        }
        parent = { ...properties };
        return {
          ...acc,
          [k]: properties,
        };
      }, {}),
    });
  };

  const onUpdateFilter = (key: string, value: string | string[]) => {
    if (!value) {
      onClearFilter(key);
      return;
    }
    onUpdateChildren(key, value);
  };

  return {
    onUpdateFilter,
  };
};
