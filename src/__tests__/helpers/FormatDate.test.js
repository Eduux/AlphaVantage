import {
  formatDateRender,
  formatDateTimeRender,
  formatDateFilter,
} from '../../helpers/FormatDate';

describe('Helper format date', () => {
  it('should be format a date', () => {
    const date = formatDateRender('2019-11-01');
    expect(date).toBe('01/11/2019');
  });

  it('should be format a date with time', () => {
    const date = formatDateTimeRender('2019-11-01 16:22:31');
    expect(date).toBe('01/11/2019 04:11:22');
  });

  it('should be format a date to filter', () => {
    const date = formatDateFilter('2019/11/01');
    expect(date).toBe('2019-11-01');
  });
});
