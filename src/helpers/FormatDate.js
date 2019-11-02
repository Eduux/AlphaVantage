import moment from 'moment';

export function formatDateFilter(date) {
  return moment(date).format('YYYY-MM-DD');
}

export function formatDateRender(date) {
  return moment(date).format('DD/MM/YYYY');
}
