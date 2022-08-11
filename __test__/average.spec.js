const { average } = require('../src/libs');

const result = average(1, 5);

describe('AVERAGE', () => {
  it('should return number', () => {
    expect(Number.isInteger(result)).toBeTruthy();
  });
  it('should return 3 when passed 1, 5 as arguments', () => {
    expect(result).toEqual(3);
  });

  it('should must throw an error if the inputs not a number', () => {
    expect(() => average('a', 'b')).toThrowError('input values must be an integer');
  });
});
