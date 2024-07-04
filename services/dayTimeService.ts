/* eslint-disable prettier/prettier */
type DateTimeComponent =
  | 'day'
  | 'month'
  | 'year'
  | 'hour'
  | 'minute'
  | 'second'
  | 'dayOfWeek'
  | 'all';

type DateTimeComponents = {
  day: number;
  month: number;
  year: number;
  hour: number;
  minute: number;
  second: number;
  dayOfWeek: string;
};

export const getDateTime = (
  component: DateTimeComponent = 'all',
): DateTimeComponents | number | string => {
  const now = new Date();

  const dateTimeComponents: DateTimeComponents = {
    day: now.getDate(),
    month: now.getMonth() + 1,
    year: now.getFullYear(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
    dayOfWeek: now.toLocaleDateString('vi-VN', {weekday: 'long'}),
  };

  if (component === 'all') {
    return dateTimeComponents;
  } else if (component in dateTimeComponents) {
    return dateTimeComponents[component as keyof DateTimeComponents];
  } else {
    throw new Error('Invalid date/time component requested');
  }
};

const getVietnameseDayOfWeek = (dayOfWeek: string): string => {
  switch (dayOfWeek) {
    case 'Chủ nhật':
      return 'CN';
    case 'Thứ hai':
      return 'T2';
    case 'Thứ ba':
      return 'T3';
    case 'Thứ tư':
      return 'T4';
    case 'Thứ năm':
      return 'T5';
    case 'Thứ sáu':
      return 'T6';
    case 'Thứ bảy':
      return 'T7';
    default:
      return dayOfWeek;
  }
};

export const getVietnamDayOfWeek = (): string => {
  const dayOfWeek = getDateTime('dayOfWeek');
  if (typeof dayOfWeek === 'string') {
    return getVietnameseDayOfWeek(dayOfWeek);
  }
  throw new Error('Unexpected dayOfWeek type');
};

const today = new Date();

const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const options: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'numeric',
};

export const formattedDate = `Hôm nay, ${today
  .toLocaleDateString('vi-VN', options)
  .replace('/', ' tháng ')}`;

export const formattedTomorrow = `Ngày mai, ${tomorrow
  .toLocaleDateString('vi-VN', options)
  .replace('/', ' tháng ')}`;
