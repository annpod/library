export interface IHashMap<T> {
  [key: string]: T;
}

export interface ISelectOption {
  [key: string]: string;
  value: string;
  label: string;
}

export interface IIconDescription {
  key: string;
  url: string;
}

export interface ICheckOption extends ISelectOption {}

export interface IDictionaryOption {
  key: string;
  name: string;
  regionKey?: string;
}

export interface IRange<T> {
  start: T;
  end: T;
}

export enum FormState {
  Add = 1,
  Edit,
}

export enum ToastStatus {
  error = 'error',
  info = 'info',
  warn = 'warn',
  success = 'success',
}

export interface IRegion {
  regionKey: string;
  name: string;
  provisioningKey: string;
}

export interface IResourcesStateData {
  regionList: IRegion[];
  regionOptionList: ISelectOption[];
  currentRegion: ISelectOption | null;
  currentSection: string | null;
  desksEnabled: boolean;
  roomsEnabled: boolean;
}

export enum PreferencesItems {
  defaultRegionId = 'defaultRegionId',
  defaultSiteId = 'defaultSiteId',
  defaultBuildingId = 'defaultBuildingId',
  defaultFloorId = 'defaultFloorId',
}

export interface IUserPreferences {
  [PreferencesItems.defaultRegionId]: string;
  [PreferencesItems.defaultSiteId]: string;
  [PreferencesItems.defaultBuildingId]: string;
  [PreferencesItems.defaultFloorId]: string;
  currentUserKey: string;
}

export interface ITimePickerProps {
  range: IRange<Date>;
  value: string;
  onChange: (value: any) => any;
  placeholder?: string;
  width?: string;
}

export type IDayRangeValue = [number, number];

export interface IDayRangePickerProps {
  value: IRange<number>;
  onChange: (value: IRange<number>) => void;
}