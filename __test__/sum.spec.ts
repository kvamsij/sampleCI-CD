const { sum } = require('../libs');

describe('SUM', () => {
  it('should return number', () => {
    const result = sum(1, 5);
    expect(Number.isInteger(result)).toBeTruthy();
  });
  it('should return 6 when passed 1, 5 as arguments', () => {
    const result = sum(1, 5);
    expect(result).toEqual(6);
  });
});
