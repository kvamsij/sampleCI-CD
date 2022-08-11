const { sum } = require('../libs');

const result = sum(1, 5);

describe('SUM', () => {
  it('should return number', () => {
    expect(Number.isInteger(result)).toBeTruthy();
  });
  it('should return 6 when passed 1, 5 as arguments', () => {
    expect(result).toEqual(6);
  });

  it('should must throw an error if the inputs not a number', () => {
    expect(() => sum('a', 'b')).toThrowError('input values must be an integer');
  });
});
