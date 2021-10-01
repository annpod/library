import { RouteSelectorButtons } from './route-selector.constants';

export const selector = RouteSelectorButtons.Estate;

export const buttons = [
  {
    route: '/administration/estate',
    selector: RouteSelectorButtons.Estate
  },
  {
    route: '/administration/resources',
    selector: RouteSelectorButtons.Resources
  },
 
];
export const routes = [
  '/administration/estate',
  '/administration/resources',
  '/administration/covid-19',
  '/administration/bookings',
  '/administration/reporting'
];
