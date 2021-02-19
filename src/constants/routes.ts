import { APP_CONFIG } from './config';

const root = APP_CONFIG.rootRoute;
export const HOME_ROUTE = `${root}`;
export const TEAMS_SIGNIN_LANDING = `${root}/teams-signin-landing`;
export const ESTATE_ROUTE = `${root}/estate`;
export const RESOURCES_ROUTE = `${root}/resources`;
export const SETTIGNS_ROUTE = `${root}/settings`;
export const UPLOAD_ROUTE = `${root}/upload`;

export const LOGIN_ROUTE = `${root}/auth`;
export const LOGIN_HANDLE_ROUTE = `${root}/login`;
export const RENEW_HANDLE_ROUTE = `${root}/renew`;
export const LOGOUT_HANDLE_ROUTE = `${root}/logout`;

export const RESOURCES_ROOMS_ROUTE = `${root}/resources/rooms`;

export const TEAMS_SIGNIN_ROUTE = `${SETTIGNS_ROUTE}/teams-signin`;

export const UPLOAD_ESTATE_ROUTE = `${UPLOAD_ROUTE}/estate`;
export const UPLOAD_MEETING_ROOMS_ROUTE = `${UPLOAD_ROUTE}/meeting-rooms`;
export const UPLOAD_DESKS_ROUTE = `${UPLOAD_ROUTE}/desks`;
export const COVID_ROUTE = `${root}/covid-19`;
export const BOOKINGS_ROUTE = `${root}/bookings`;

export const REPORTING_ROUTE = `${root}/reporting`;

export const HIDDEN_TABS = [
  // COVID_ROUTE,
  // REPORTING_ROUTE,
  // SETTIGNS_ROUTE,
  // UPLOAD_ROUTE,
  '',
];

interface IRolesObject {
  [key: string]: string[];
}

const administrator = [
  ESTATE_ROUTE,
  RESOURCES_ROUTE,
  COVID_ROUTE,
  BOOKINGS_ROUTE,
  REPORTING_ROUTE,
];

export const ROLE_ACCESS: IRolesObject = {
  administrator,
  systemAdministrator: [...administrator, SETTIGNS_ROUTE],
  implementation: [...administrator, SETTIGNS_ROUTE, UPLOAD_ROUTE],
  facilityManager: [RESOURCES_ROUTE, BOOKINGS_ROUTE, REPORTING_ROUTE],
  serviceProvider: [BOOKINGS_ROUTE],
};
