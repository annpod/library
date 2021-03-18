import {
  IDesksFilter,
  DeskFilterItems,
  DeskFilterGroups,
} from '../desks.typings';
import { IDictionaryOption } from '../../typings/etc';
import { formatSelectOptions } from '../../utils/select.utils';
import { strings } from '../../constants/strings';
// import { INeighbourhood } from '.screens/resources/neighbourhoods/neighbourhoods.typings';
import { locationKeyMap } from '../desks.constants';

interface IFilterGroupItem {
  key: string;
  placeholder: string;
  value: string;
  options: IDictionaryOption[];
  isDisabled: boolean;
  filterKey?: string;
}

export const createNeighbourhoodsFilter = (
  neighbourhoods: any // INeighbourhood[]
) => {
  return {
    keyValue: DeskFilterItems.Neighbourhood,
    placeholder: strings.resources.desks.neighbourhoodSelectPlaceholder,
    value: '',
    options: formatSelectOptions(neighbourhoods, 'id'),
    isDisabled: false,
    filterKey: 'id',
  };
};

export const createFeatureFilter = (filter: IDesksFilter) => {
  return {
    [DeskFilterGroups.OptionsSection]: parseFilterGroup([
      {
        key: DeskFilterItems.Feature,
        placeholder: strings.resources.desks.featureSelectPlaceholder,
        value: '',
        options: filter.features,
        isDisabled: false,
        filterKey: 'id',
      },
      {
        key: DeskFilterItems.Status,
        placeholder: strings.resources.rooms.statusSelectPlaceholder,
        value: '',
        options: filter.statuses,
        isDisabled: false,
        filterKey: 'name',
      },
    ]),
  };
};

export const createFilter = (filter: any) => {
  return {
    [DeskFilterGroups.WhereSection]: parseFilterGroup([
      {
        key: DeskFilterItems.Region,
        placeholder: strings.resources.desks.regions,
        value: '',
        options: filter.regions,
        isDisabled: false,
      },
      {
        key: DeskFilterItems.Site,
        placeholder: strings.resources.rooms.siteSelectPlaceholder,
        value: '',
        options: [],
        isDisabled: true,
      },
      {
        key: DeskFilterItems.Building,
        placeholder: strings.resources.rooms.buildingSelectPlaceholder,
        value: '',
        options: [],
        isDisabled: true,
      },
      {
        key: DeskFilterItems.Floor,
        placeholder: strings.resources.rooms.floorSelectPlaceholder,
        value: '',
        options: [],
        isDisabled: true,
      },
      {
        key: DeskFilterItems.Neighbourhood,
        placeholder: strings.resources.desks.neighbourhoodSelectPlaceholder,
        value: '',
        options: filter.neighbourhoods,
        isDisabled: true,
        filterKey: 'id',
      },
    ]),
    [DeskFilterGroups.OptionsSection]: parseFilterGroup([
      {
        key: DeskFilterItems.Feature,
        placeholder: strings.resources.desks.featureSelectPlaceholder,
        value: '',
        options: filter.features,
        isDisabled: false,
        filterKey: 'id',
      },
      {
        key: DeskFilterItems.Status,
        placeholder: strings.resources.rooms.statusSelectPlaceholder,
        value: '',
        options: filter.statuses,
        isDisabled: false,
        filterKey: 'name',
      },
    ]),
  };
};

const parseFilterGroup = (group: IFilterGroupItem[]) => {
  return group.reduce((acc, x) => {
    const filterKey = x.filterKey || 'provisioningKey';
    return {
      ...acc,
      [x.key]: {
        keyValue: x.key,
        placeholder: x.placeholder,
        value: '',
        options: formatSelectOptions(x.options, filterKey),
        isDisabled: x.isDisabled || false,
      },
    };
  }, {});
};

const getRegionKey = (regions: any, regionProvisioningId: string) => {
  const region = regions.find(
    (r: any) => r.provisioningKey === regionProvisioningId
  );
  return region ? region.regionKey : '';
};

export const formatData = (data: any) => {
  const newData: any = {};
  Object.keys(data).forEach((key: any) => {
    if (key === 'regions') {
      newData[key] = data[key].map((item: any) => ({
        ...item,
        key: item.regionKey,
      }));
    } else if (key === 'sites') {
      newData[key] = data[key].map((item: any) => ({
        ...item,
        key: item.key.toString(),
        regionKey: getRegionKey(data.regions, item.regionProvisioningId),
      }));
    } else {
      newData[key] = data[key].map((item: any) => ({
        ...item,
        [locationKeyMap[key]]: item[locationKeyMap[key]]
          ? item[locationKeyMap[key]].toString()
          : item[locationKeyMap[key]],
        key: item.key ? item.key.toString() : item.key,
      }));
    }
  });
  return newData;
};

