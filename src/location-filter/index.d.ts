export enum PreferencesItems {
  defaultRegionId = 'defaultRegionId',
  defaultSiteId = 'defaultSiteId',
  defaultBuildingId = 'defaultBuildingId',
  defaultFloorId = 'defaultFloorId'
}

export interface IUserPreferences {
  [PreferencesItems.defaultRegionId]: string;
  [PreferencesItems.defaultSiteId]: string;
  [PreferencesItems.defaultBuildingId]: string;
  [PreferencesItems.defaultFloorId]: string;
  currentUserKey: string;
}