import {
  ESTATE_ROUTE,
  RESOURCES_ROUTE,
  SETTIGNS_ROUTE,
  COVID_ROUTE,
  UPLOAD_ROUTE,
  BOOKINGS_ROUTE,
  REPORTING_ROUTE
} from '../constants/routes';

import {
  EstateIcon,
  ResourcesIcon,
  ReportingIcon,
  CovidIcon,
  SettingsIcon,
  UploadIcon,
  BookingsIcon
} from './route-selector.icons';

import { RouteSelectorButtons } from './route-selector.constants';

export const selector = RouteSelectorButtons.Estate;

export const buttons = [
  {
    route: ESTATE_ROUTE,
    selector: RouteSelectorButtons.Estate
  },
  {
    route: RESOURCES_ROUTE,
    selector: RouteSelectorButtons.Resources
  },
  {
    route: UPLOAD_ROUTE,
    selector: RouteSelectorButtons.Upload
  },
  {
    route: COVID_ROUTE,
    selector: RouteSelectorButtons.Covid
  },
  {
    route: BOOKINGS_ROUTE,
    selector: RouteSelectorButtons.Bookings
  },
  {
    route: REPORTING_ROUTE,
    selector: RouteSelectorButtons.Reporting
  },
  {
    route: SETTIGNS_ROUTE,
    selector: RouteSelectorButtons.Settings
  }
];
export const routes = [
  '/administration/estate',
  '/administration/resources',
  '/administration/covid-19',
  '/administration/bookings',
  '/administration/reporting'
];
