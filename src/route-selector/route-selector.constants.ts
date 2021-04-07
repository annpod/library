export enum RouteSelectorButtons {
  Estate = 'Estate',
  Resources = 'Resources',
  Covid = 'Covid',
  Bookings = 'Bookings',
  Reporting = 'Reporting',
  Upload = 'Upload data',
  Settings = 'Settings'
}

import {
  EstateIcon,
  ResourcesIcon,
  ReportingIcon,
  CovidIcon,
  SettingsIcon,
  UploadIcon,
  BookingsIcon
} from './route-selector.icons';

export const IconMap = {
  [RouteSelectorButtons.Estate]: EstateIcon,
  [RouteSelectorButtons.Resources]: ResourcesIcon,
  [RouteSelectorButtons.Upload]: UploadIcon,
  [RouteSelectorButtons.Covid]: CovidIcon,
  [RouteSelectorButtons.Bookings]: BookingsIcon,
  [RouteSelectorButtons.Reporting]: ReportingIcon,
  [RouteSelectorButtons.Settings]: SettingsIcon
};
