import { plotBuilder } from '../../helpers/PlotBuilder';

describe('Plot builder helper', () => {
  it('should be format a object', () => {
    const data = plotBuilder({
      '2019-11-01 16:00:00': {
        open: '11.7700',
        high: '11.7700',
        low: '11.7600',
        close: '11.7700',
        volume: '38887',
      },
    });
    expect(data).toBeTruthy();
  });
});
