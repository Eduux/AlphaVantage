import { roundNumbers } from '../../helpers/RoundNumbers';

describe('Round Numbers helper', () => {
  it('should be round a number', () => {
    const data = roundNumbers('11.7700');
    expect(data).toBe(11.77);
  });
});
