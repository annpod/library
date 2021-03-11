import moment from 'moment';

export const HOUR_FORMAT = 'HH:mm:ss';
export const HOUR_FORMAT_PICKER = 'HH:mm';

export const DATE_FORMAT = {
  api: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
  api2: 'YYYY-MM-DDTHH:mm:ss',
  datepicker: 'ddd D MMMM YYYY',
  ui: 'D MMM YYYY',
  hours: 'HH:mm',
  local: moment.HTML5_FMT.DATETIME_LOCAL_SECONDS,
};
