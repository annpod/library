import {
  DeskFilterItems,
  DeskFilterGroups,
} from '../desks.typings';
import { IExtendedSelectOption } from '../../extended-select';
import { IHashMap } from '../../../typings/etc';
import { IPaginatableParams, ISortableParams } from '../../../typings/api';

export class FilterBuilder {
  public static build(
    filterData: any,
    filterLocation: any,
    selectSearchFilter: IHashMap<IHashMap<IExtendedSelectOption>>,
    searchName: string,
    paginationParams: IPaginatableParams,
    sortParams: ISortableParams,
    neighbourhood: IExtendedSelectOption,
  ): any {
    const optionsSection = selectSearchFilter[DeskFilterGroups.OptionsSection];
    return {
      regionProvisioningKey: this.getProvisioningKey(this.getFilterValue(
        filterLocation[DeskFilterItems.Region]
      ), filterData.regions),
      deskName: searchName,
      siteProvisioningKey: 
      this.getProvisioningKey(this.getFilterValue(
        filterLocation[DeskFilterItems.Site]
      ), filterData.sites),
      buildingProvisioningKey: this.getProvisioningKey(this.getFilterValue(
        filterLocation[DeskFilterItems.Building]
      ), filterData.buildings),
      floorProvisioningKey:this.getProvisioningKey(this.getFilterValue(
        filterLocation[DeskFilterItems.Floor]
      ), filterData.floors),
      neighbourhood: this.getFilterValue(
        neighbourhood
      ),
      deskFeature: this.getFilterValue(optionsSection[DeskFilterItems.Feature]),
      deskStatus: this.getFilterValue(optionsSection[DeskFilterItems.Status]),
      ...paginationParams,
      ...sortParams,
    };
  }

  private static getFilterValue(option: IExtendedSelectOption): string {
    if (!option) return '';
    return option.value ? option.value : '';
  }

  private static getProvisioningKey(value: string, list: any): string {
    const listItem = list.find((item: any) => (
      item.key === value
    ));    
    return listItem ? listItem.provisioningKey : '';
  }
}
