import moment from 'moment';

export const formattedTime = (value: any) => {
  return moment.unix(value).format('HH:mm:ss');
};
