import { IHashMap} from './typings/index.d.ts';
export {IHashMap};
export interface IAutoCompleteOption {
  text: string;
  value: string;
}

export interface IIconDescription {
  key: string;
  url: string;
}

export interface IDictionaryOption {
  key: string;
  name: string;
  regionKey?: string;
}
export enum FormState {
  Add = 1,
  Edit,
}
export interface IRange<T> {
  start: T;
  end: T;
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

export interface IHashMap<T> {
  [key: string]: T;
}