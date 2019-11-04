import { ajustKeys } from '../../helpers/ObjectBuilder';

describe('Object Buidler helper', () => {
  it('should be format a object', () => {
    const data = ajustKeys({
      'Meta Data': {
        '1. Information':
          'Intraday (5min) open, high, low, close prices and volume',
        '2. Symbol': 'BSBR',
        '3. Last Refreshed': '2019-11-01 16:00:00',
        '4. Interval': '5min',
        '5. Output Size': 'Compact',
        '6. Time Zone': 'US/Eastern',
      },
      'Time Series (5min)': {
        '2019-11-01 16:00:00': {
          '1. open': '11.7700',
          '2. high': '11.7700',
          '3. low': '11.7600',
          '4. close': '11.7700',
          '5. volume': '38887',
        },
      },
    });
    expect(data.MetaData).toBeTruthy();
  });
});
