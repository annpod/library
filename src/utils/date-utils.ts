import { format, parse, startOfToday, startOfTomorrow } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-DD';

export const createDateFromHours = (hours: string) => {
  const day = format(hours === '1.00:00:00'? startOfTomorrow() : startOfToday( ), DATE_FORMAT)
  return parse(`${day}T${hours}`);
};
