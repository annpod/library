import { IDictionaryOption } from './etc';

export interface IDesk {
  provisioningKey: string;
  name: string;
  deskType: string;
  deskStatus: IDictionaryOption;
  features: IDictionaryOption[];
}

export interface ISiteFilter extends IDictionaryOption {
  regionProvisioningId: string;
}

export interface IBuildingFilter extends IDictionaryOption {
  siteKey: string;
  siteProvisioningKey: string;
}

export interface IFloorFilter extends IDictionaryOption {
  buildingKey: string;
  buildingProvisioningKey: string;
}

export interface IDesksFilter {
  statuses: IDictionaryOption[];
  features: IDictionaryOption[];  
}

export interface IDesksSearchFilter {
  searchName: string;
}

export interface IDeskList {
  desks: IDesk[];
  totalRow: number;
}

export enum DeskFilterItems {
  Region = 'Region',
  Site = 'Site',
  Building = 'Building',
  Floor = 'Floor',
  Neighbourhood = 'Neighbourhood',
  Status = 'Status',
  Feature = 'Features',
}

export enum DeskFilterGroups {
  WhereSection = 'WhereSection',
  OptionsSection = 'OptionSection',
}

export enum DesksStateStatuses {
  add = 'ADD_DESK',
  edit = 'EDIT_DESK',
  notSelected = 'NOT_SELECTED',
}

export interface ISaveDeskData {
  features: string[];
  neighbourhoodId: string;
  name: string;
  status: string;
  allocatedUserId: null | string;
  provisioningKey: string;
}
